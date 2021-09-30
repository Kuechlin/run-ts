import { EmitOutput, OutputFile } from '../global';
import { Package } from '../state';
import * as Babel from '@babel/standalone';
import * as vlq from 'vlq';

export function transform(
  output: EmitOutput,
  imports: Record<string, Package>
) {
  if (output.emitSkipped) throw new Error('emit skipped');
  const mapFile = output.outputFiles.find((a) => a.name.endsWith('.js.map'));
  const sourceFile = output.outputFiles.find((a) => a.name.endsWith('.js'));
  if (!mapFile || !sourceFile) throw new Error('source or map file missing');

  const map = parseSourceMap(mapFile);
  const code = sourceFile.text;

  var result = Babel.transform(code, {
    plugins: [
      {
        visitor: {
          // replace import with unpkg url
          ImportDeclaration(path) {
            if (path.node.source.value === 'react') {
              path.remove();
            } else {
              const value = imports[path.node.source.value];
              if (!value || !value.url) return;

              path.replaceWith(
                importDeclaration(
                  path.node.specifiers,
                  stringLiteral(value.url)
                )
              );
            }
          },
          // wrap statements with log
          ExpressionStatement(path) {
            if (
              (path.node.expression.type === 'CallExpression' &&
                path.node.expression.callee.type === 'Identifier' &&
                path.node.expression.callee.name === 'log') ||
              (path.node.expression.type === 'UnaryExpression' &&
                path.node.expression.argument.type !== 'UnaryExpression')
            )
              return;

            if (!path.node.loc) return;

            path.replaceWith(
              callExpression(
                {
                  type: 'Identifier',
                  name: 'log',
                } as any,
                [
                  {
                    type: 'NumericLiteral',
                    value: getLineNumber(
                      map,
                      path.node.loc.start.line,
                      path.node.loc.start.column
                    ),
                  } as any,
                  path.node.expression,
                ]
              )
            );
          },
        },
      },
    ],
  });

  return result.code || code;
}

type SoureMap = {
  version: string;
  file: string;
  sourceRoot: string;
  sources: string[];
  mappings: string;
};
type Mapping = number[][][];

//SourceMap;
/*
example string: AAEA,CAAC,GAAG,CAAC,CAACAAEN,MAAM,IAAI,GAAG,CAAC,GAAW,EAAE,EAAE;
[
    // line 1
    [
        // col 1
        [0: column, 0: sourceFile, 1: sourceRow, 0: sourceCol]
        // col 2
        [...]
    ]
    // line 2
    [...]
]
*/
const parseSourceMap = (file: OutputFile): Mapping => {
  const content = JSON.parse(file.text) as SoureMap;

  return content.mappings
    .split(';')
    .map((line) => line.split(',').map(vlq.decode));
};

const getLineNumber = (mapping: Mapping, line: number, column: number) => {
  let row = 1;
  for (let i = 0; i < line; i++) {
    const mapLine = mapping[i];
    for (const mapColumn of mapLine) {
      if (mapColumn.length !== 4) continue;
      row += mapColumn[2];
      if (i === line - 1 && mapColumn[0] === column) {
        return row;
      }
    }
  }
  return row;
};

/*
 * babel types helper functions
 */

const stringLiteral = (value: string): any => ({
  type: 'StringLiteral',
  value,
});

const importDeclaration = (specifiers: any[], source: any): any => ({
  type: 'ImportDeclaration',
  specifiers,
  source,
});

const callExpression = (callee: any, args: any[]): any => ({
  type: 'CallExpression',
  callee,
  arguments: args,
});

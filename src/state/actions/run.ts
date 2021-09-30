import { Context } from '..';
import { g, EmitOutput } from '../global';

/**
 * run code (save => compile => execute)
 */
export const run = async ({ state, actions, effects }: Context) => {
  if (state.running) return;
  try {
    state.running = true;
    state.error = false;
    state.active = 'output';
    // clear last output
    window.dispatchEvent(new Event('clear-logs'));
    // save code
    const emitOutput = await actions._save();
    // compile
    const compiled = await actions._transform(emitOutput);
    // execute code
    effects.executeScript(compiled);
    // wait
    await effects.wait(100);
    // done
    state.running = false;
  } catch (error) {
    state.running = false;
    state.error = error;
    console.error(error);
  }
};

/**
 * save value from editor
 */
export const _save = async ({ effects, actions }: Context) => {
  if (!g.monaco || !g.editor) throw new Error('no ref to monaco editor');

  // format code
  g.editor.getAction('editor.action.formatDocument')?.run();

  // save raw code to local storage
  effects.local.save(g.editor.getValue());

  return effects.worker.getEmitOutput();
};

const stringLiteral = (value: string): any => ({
  type: 'StringLiteral',
  value,
});

const importDeclaration = (specifiers: any[], source: any): any => ({
  type: 'ImportDeclaration',
  specifiers,
  source,
});

const callExpression = (callee: any, args: any[]) => ({
  type: 'CallExpression',
  callee,
  arguments: args,
});

/**
 * transform emit output to executable js
 * @param file OutputFile
 * @returns executable js
 */
export const _transform = ({ state }: Context, output: EmitOutput) => {
  const code = output.outputFiles[0]
    ? output.outputFiles[0].text
    : 'console.error("no code")';

  // @ts-ignore
  var result = Babel.transform(code, {
    plugins: [
      {
        visitor: {
          // replace import with unpkg url
          ImportDeclaration(path: any) {
            if (path.node.source.value === 'react') {
              path.remove();
            } else {
              const value = state.imports[path.node.source.value];
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
          ExpressionStatement(path: any) {
            if (
              (path.node.expression.type === 'CallExpression' &&
                path.node.expression.callee.type === 'Identifier' &&
                path.node.expression.callee.name === 'log') ||
              (path.node.expression.type === 'UnaryExpression' &&
                path.node.expression.argument.type !== 'UnaryExpression')
            )
              return;

            path.replaceWith(
              callExpression(
                {
                  type: 'Identifier',
                  name: 'log',
                } as any,
                [
                  {
                    type: 'NumericLiteral',
                    value: path.node.loc?.start.line,
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
};

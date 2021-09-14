import { types } from '@babel/core';
import { transform } from '@babel/standalone';
import { Decode, Hook } from 'console-feed';
import { Context } from '..';
import { g, EmitOutput } from '../global';

/**
 * run code (save => compile => execute)
 */
export const run = async ({ state, actions, effects }: Context) => {
  if (state.running) return;
  try {
    state.running = true;
    // clear last output
    window.dispatchEvent(new Event('clear-logs'));
    // save code
    const emitOutput = await actions._save();
    // compile
    const compiled = await actions._compile(emitOutput);
    // execute code
    effects.executeScript(compiled);
    // wait
    await effects.wait(100);
    // done
    state.running = false;
  } catch (error) {
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

/**
 * transform emit output to executable js
 * @param file OutputFile
 * @returns executable js
 */
export const _compile = ({ state }: Context, output: EmitOutput) => {
  const code = output.outputFiles[0]
    ? output.outputFiles[0].text
    : 'console.error("no code")';

  var result = transform(code, {
    plugins: [
      {
        visitor: {
          // replace import with unpkg url
          ImportDeclaration(path) {
            const value = state.imports[path.node.source.value];
            if (!value || !value.url) return;

            path.replaceWith(
              types.importDeclaration(
                path.node.specifiers,
                types.stringLiteral(value.url)
              )
            );
          },
          // wrap statements with log
          ExpressionStatement(path) {
            if (
              path.node.expression.type === 'CallExpression' &&
              path.node.expression.callee.type === 'Identifier' &&
              path.node.expression.callee.name === 'log'
            )
              return;

            path.replaceWith(
              types.callExpression(
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

import { Context } from '..';
import { g, ICodeEditor, Monaco } from '../global';
import { createEditorTheme } from '../../utils/theme';

/**
 * Monaco Editor before mount
 * @param payload Monaco reference
 */
export const beforeMount = ({ state }: Context, monaco: Monaco) => {
  state.current = 'mounting';

  monaco.editor.defineTheme('default-dark', createEditorTheme(state.theme));

  // config compiler
  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ESNext,
    allowNonTsExtensions: true,
    allowSyntheticDefaultImports: true,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
    module: monaco.languages.typescript.ModuleKind.ESNext,
    noEmit: false,
    jsx: monaco.languages.typescript.JsxEmit.React,
    jsxFactory: 'React.createElement',
    typeRoots: ['node_modules/@types'],
    removeComments: false,
    sourceMap: true,
  });
  // enable validation
  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: false,
    noSyntaxValidation: false,
  });
};

/**
 * Monaco Editor did mount
 * @param payload Monaco reference
 */
export const didMount = async (
  { state, effects, actions }: Context,
  { monaco, editor }: { monaco: Monaco; editor: ICodeEditor }
) => {
  state.current = 'mounted';
  g.monaco = monaco;
  g.editor = editor;

  for (const [name, version] of Object.entries(effects.local.getImports())) {
    await actions.install({ name, version });
  }
};

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
    const compiled = effects.transform(emitOutput, state.imports);
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

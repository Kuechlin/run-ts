import { Context } from '..';
import { createEditorTheme, defaultTheme, Theme } from '../../utils/theme';
import { g, ICodeEditor, Monaco } from '../global';

export * from './import';
export * from './run';

export const onInitializeOvermind = async ({ state, effects }: Context) => {
  state.theme = effects.local.getTheme();
};

/**
 * Monaco Editor before mount
 * @param payload Monaco reference
 */
export const beforeMount = ({ state }: Context, monaco: Monaco) => {
  state.current = 'mounting';

  monaco.editor.defineTheme('default-dark', createEditorTheme(state.theme));

  console.log(monaco.languages.typescript);

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
 * update theme colors and reload
 * @param theme theme colors
 */
export const updateTheme = ({ state, effects }: Context, theme: Theme) => {
  state.theme = theme;
  effects.local.setTheme(theme);
  g.monaco?.editor.defineTheme('default-dark', createEditorTheme(state.theme));
};

export const resetTheme = ({ state, effects }: Context) => {
  state.theme = defaultTheme;
  effects.local.setTheme(defaultTheme);
  g.monaco?.editor.defineTheme('default-dark', createEditorTheme(state.theme));
};

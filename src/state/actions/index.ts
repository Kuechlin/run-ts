import { Context } from '..';
import { g, ICodeEditor, Monaco } from '../global';
import oneDark from '../../theme.json';

export * from './import';
export * from './run';

/**
 * Monaco Editor before mount
 * @param payload Monaco reference
 */
export const beforeMount = ({ state }: Context, monaco: Monaco) => {
  state.current = 'mounting';

  monaco.editor.defineTheme('one-dark', oneDark as any);
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

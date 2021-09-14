import * as monaco from 'monaco-editor';

export type Monaco = typeof monaco;
export type EmitOutput = monaco.languages.typescript.EmitOutput;
export type ICodeEditor = monaco.editor.IStandaloneCodeEditor;

export const g: { monaco?: Monaco; editor?: ICodeEditor } = {};

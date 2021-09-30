import * as monaco from 'monaco-editor';

export type Monaco = typeof monaco;
export type EmitOutput = monaco.languages.typescript.EmitOutput;
export type OutputFile = monaco.languages.typescript.OutputFile;
export type ICodeEditor = monaco.editor.IStandaloneCodeEditor;
export type TypeScriptWorker = monaco.languages.typescript.TypeScriptWorker;
export type MonacoUri = monaco.Uri;
export type IThemeData = monaco.editor.IStandaloneThemeData;

export const g: { monaco?: Monaco; editor?: ICodeEditor } = {};

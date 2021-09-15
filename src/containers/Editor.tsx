import React from 'react';
import Editor, { Monaco } from '@monaco-editor/react';
import { PageSpinner } from '../components/Spinner';
import { useActions, useEffects } from '../state';
import { ICodeEditor } from '../state/global';

export type EditorProps = {};

export default function () {
  const actions = useActions();
  const effects = useEffects();

  const handleDidMount = (editor: ICodeEditor, monaco: Monaco) =>
    actions.didMount({ editor, monaco });

  return (
    <Editor
      width="100%"
      height="100%"
      language="typescript"
      theme="one-dark"
      onMount={handleDidMount}
      beforeMount={actions.beforeMount}
      defaultValue={effects.local.load()}
      defaultPath={'file:///code.tsx'}
      options={{
        minimap: {
          enabled: false,
        },
        scrollBeyondLastLine: false,
      }}
      loading={<PageSpinner />}
    />
  );
}

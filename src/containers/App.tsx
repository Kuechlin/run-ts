import React, { lazy, Suspense, useEffect } from 'react';
import Mousetrap from 'mousetrap';
import debounce from '../utils/debounce';
import Layout from '../components/Layout';
import Importer from './Importer';
import { useActions, useAppState } from '../state';
import Console from '../components/Console';
import Output from '../components/Output';
import Button from '../components/Button';
import Spinner from '../components/Spinner';

const Editor = lazy(() => import('./Editor'));

export default function App() {
  const actions = useActions();

  useEffect(() => {
    Mousetrap.bind('ctrl+s', (ev) => {
      ev.preventDefault();
      handleSave();
    });

    return () => {
      Mousetrap.unbind('ctrl+s');
    };
  }, []);

  const handleSave = debounce(actions.run, 1000, true);

  return (
    <Layout
      onKeyDown={(ev) => {
        if (ev.ctrlKey && (ev.key === 's' || ev.key === 's')) {
          ev.preventDefault();
          handleSave();
        }
      }}
      header={
        <>
          <SaveButton onClick={handleSave} />
          <Importer />
        </>
      }
      editor={
        <Suspense fallback={<Spinner />}>
          <Editor />
        </Suspense>
      }
      output={<Output />}
      console={<Console />}
    />
  );
}

const SaveButton = ({ onClick }: { onClick(): void }) => {
  const state = useAppState();
  return (
    <Button
      style={{
        border: state.running ? '1px solid #c678dd' : undefined,
        transition: '0.5s',
      }}
      onClick={onClick}
    >
      strg + s
    </Button>
  );
};

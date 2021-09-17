import React, { lazy, Suspense, useCallback, useEffect } from 'react';
import debounce from '../utils/debounce';
import Layout from '../components/Layout';
import Importer from './Importer';
import { useActions, useAppState } from '../state';
import Output from '../components/Output';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import Search from '../components/Search';
import { useTheme } from 'styled-components';

const Editor = lazy(() => import('./Editor'));

export default function App() {
  const actions = useActions();

  const handleSave = debounce(actions.run, 1000, true);

  const handleKeydown = useCallback(
    (ev: KeyboardEvent | React.KeyboardEvent) => {
      if (ev.ctrlKey && (ev.key === 's' || ev.key === 's')) {
        ev.preventDefault();
        handleSave();
      }
    },
    []
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <Layout
      onKeyDown={handleKeydown}
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
    />
  );
}

const SaveButton = ({ onClick }: { onClick(): void }) => {
  const state = useAppState();
  const { colors } = useTheme();
  return (
    <Button
      style={{
        border: state.running ? '1px solid ' + colors.link : undefined,
        transition: '0.5s',
      }}
      onClick={onClick}
    >
      strg + s
    </Button>
  );
};

import React from 'react';
import Split from 'react-split';
import styled from 'styled-components';
import { useAppState } from '../state';
import { shadeColor } from '../utils/theme';
import { ErrorFallback } from './ErrorFallback';
import { Text } from './Text';

type LayoutProps = {
  header: React.ReactNode;
  editor: React.ReactNode;
  output: React.ReactNode;
  onKeyDown(ev: React.KeyboardEvent): void;
};
export default function Layout({
  header,
  editor,
  output,
  onKeyDown,
}: LayoutProps) {
  const state = useAppState();
  return (
    <Wrapper onKeyDown={onKeyDown}>
      <Header>
        <Text
          strong
          size={22}
          style={{ padding: '0px 8px' }}
          children="run ts"
        />
        <div style={{ flexGrow: 1 }} />
        {header}
      </Header>
      {state.size === 'l' ? (
        <Split className="split" gutterSize={4} sizes={[60, 40]}>
          <Cell border>
            <Title children="editor" />
            {editor}
          </Cell>
          <Cell>
            <Title children="output" />
            {output}
          </Cell>
        </Split>
      ) : (
        <div className="split">
          <Show if={state.active === 'output'} then={output} else={editor} />
        </div>
      )}
    </Wrapper>
  );
}

type IfProps = {
  if: boolean;
  then: React.ReactNode;
  else?: React.ReactNode;
};
const Show = ({ if: _if, then: _then, else: _else }: IfProps) => {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: _if ? 'block' : 'none',
        }}
        children={_then}
      />
      {_else && (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: _if ? 'none' : 'block',
          }}
          children={_else}
        />
      )}
    </>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${(p) => p.theme.colors.background};

  .split {
    height: calc(100vh - 32px);
    display: flex;
    flex-direction: row;
  }
  .gutter {
    z-index: 1;
    margin: 0px -2px;
    cursor: col-resize;
  }
  .gutter:hover {
    background-color: ${(p) => p.theme.colors.border};
  }
`;

const Header = styled.header`
  height: 32px;
  background-color: ${(p) => shadeColor(p.theme.colors.background, -20)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Cell = styled.div<{ height?: string; width?: string; border?: boolean }>`
  height: ${(p) => p.height || '100%'};
  width: ${(p) => p.width || '100%'};
  display: flex;
  flex-direction: column;
  border-right: ${(p) =>
    p.border ? '1px solid ' + p.theme.colors.border : ''};
`;

const Title = styled(Text)`
  height: 32px;
  border-top: 1px solid ${(p) => p.theme.colors.border};
  border-bottom: 1px solid ${(p) => p.theme.colors.border};

  line-height: 32px;
  padding: 0px 8px;
`;

import React from 'react';
import Split from 'react-split';
import styled from 'styled-components';
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
  return (
    <Wrapper onKeyDown={onKeyDown}>
      <Header>
        <Text
          strong
          size={22}
          style={{ padding: '0px 8px' }}
          children="run ts"
        />
        {header}
      </Header>
      <Split className="split" gutterSize={4} sizes={[60, 40]}>
        <Cell style={{ borderRight: '1px solid #404349' }}>
          <Title children="editor" />
          {editor}
        </Cell>
        <Cell>
          <Title children="output" />
          {output}
        </Cell>
      </Split>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #282c34;

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
    background-color: #404349;
  }
`;

const Header = styled.header`
  height: 32px;
  background-color: #1d2026;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Cell = styled.div<{ height?: string; width?: string }>`
  height: ${(p) => p.height || '100%'};
  width: ${(p) => p.width || '100%'};
  display: flex;
  flex-direction: column;
`;

const Title = styled(Text)`
  height: 32px;
  border-top: 1px solid #404349;
  border-bottom: 1px solid #404349;

  line-height: 32px;
  padding: 0px 8px;
`;

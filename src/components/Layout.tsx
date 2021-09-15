import React from 'react';
import styled from 'styled-components';
import { Mosaic } from 'react-mosaic-component';
import 'react-mosaic-component/react-mosaic-component.css';

type LayoutProps = {
  header: React.ReactNode;
  editor: React.ReactNode;
  output: React.ReactNode;
  console: React.ReactNode;
  onKeyDown(ev: React.KeyboardEvent): void;
};
export default function Layout({
  header,
  editor,
  output,
  console,
  onKeyDown,
}: LayoutProps) {
  const elements: any = {
    editor: (
      <Cell style={{ borderRight: '1px solid #404349' }}>
        <Title children="editor" className="text" />
        {editor}
      </Cell>
    ),
    output: (
      <Cell>
        <Title children="output" className="text" />
        {output}
      </Cell>
    ),
    console: (
      <Cell>
        <Title children="console" className="text" />
        {console}
      </Cell>
    ),
  };

  return (
    <Wrapper onKeyDown={onKeyDown}>
      <Header className="text">
        <Logo>run ts</Logo>
        {header}
      </Header>
      <Mosaic
        renderTile={(id) => elements[id]}
        initialValue={{
          direction: 'row',
          first: 'editor',
          second: {
            direction: 'column',
            first: 'output',
            second: 'console',
            splitPercentage: 60,
          },
          splitPercentage: 60,
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  .text {
    font-family: Consolas, 'Courier New', monospace;
    font-weight: normal;
    font-feature-settings: 'liga' 0, 'calt' 0;
  }

  .mosaic {
    background-color: #282c34;

    height: calc(100vh - 32px);
  }
  .mosaic-root {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .mosaic-tile {
    margin: 0;
  }
  .mosaic .mosaic-split:hover .mosaic-split-line {
    box-shadow: 0 0 0 2px #404349;
  }
`;

const Header = styled.header`
  height: 32px;
  background-color: #1d2026;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h2`
  margin: 0;
  color: #d4d4d4;
  line-height: 32px;
  padding: 0px 8px;
`;

const Cell = styled.div<{ height?: string; width?: string }>`
  height: ${(p) => p.height || '100%'};
  width: ${(p) => p.width || '100%'};
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  height: 32px;
  color: #d4d4d4;
  border-top: 1px solid #404349;
  border-bottom: 1px solid #404349;

  font-size: 16px;
  line-height: 32px;
  padding: 0px 8px;
`;

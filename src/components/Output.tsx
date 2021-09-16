import React, { isValidElement, useCallback, useEffect, useState } from 'react';

import styled from 'styled-components';
import theme from '../theme.json';
import { Highlight } from './Highlight';
import ScrollArea from './ScrollArea';
import Spinner from './Spinner';
import { Text } from './Text';

export default function Output() {
  const [output, setOutput] = useState<Record<string, any>>({});
  const clear = () => setOutput({});

  const log = useCallback((row: number, val: any) => {
    if (val === undefined) return;
    setOutput((output) => {
      while (output[row]) {
        row++;
      }
      return { ...output, [row]: val };
    });
  }, []);

  useEffect(() => {
    // add log to window
    // @ts-ignore
    window.log = log;

    window.addEventListener('clear-logs', clear);
    return () => {
      window.removeEventListener('clear-logs', clear);
      // @ts-ignore
      window.log = null;
    };
  }, []);

  return (
    <ScrollArea horizontal={false}>
      {Object.entries(output).map(([key, val]) => (
        <LineWrapper key={key}>
          <LineNumberWrapper>
            <LineNumber size={14}>{key}</LineNumber>
          </LineNumberWrapper>
          <ContentWrapper>
            <Log value={val} />
          </ContentWrapper>
        </LineWrapper>
      ))}
    </ScrollArea>
  );
}

const LineWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const LineNumberWrapper = styled.div`
  position: relative;
  width: 64px;
  height: 19px;
`;

const LineNumber = styled(Text)`
  position: absolute;
  width: 38px;
  left: 0;

  color: ${theme.colors['editorLineNumber.foreground']};
  line-height: 19px;
  letter-spacing: 0px;
  text-align: right;
`;

const ContentWrapper = styled.div`
  padding: 8px 0px;
  > * {
    margin: 0px;
  }
  > pre > code {
    padding: 0px;
  }
`;

type LogProps = {
  value: any;
};
type LogState = {
  type: 'loading' | 'success' | 'error';
  value?: any;
};
function Log({ value }: LogProps) {
  const [state, setState] = useState<LogState>(
    value instanceof Promise ? { type: 'loading' } : { type: 'success', value }
  );

  useEffect(() => {
    if (value instanceof Promise) {
      value
        .then((res) =>
          setState({
            type: 'success',
            value: res,
          })
        )
        .catch((err) =>
          setState({
            type: 'error',
            value: err,
          })
        );
    }
  }, []);

  switch (state.type) {
    case 'loading':
      return <Spinner />;
    case 'error':
      return <Error children={state.value?.toString()} />;
    case 'success':
      if (isValidElement(state.value)) {
        return state.value;
      } else {
        return <Highlight value={state.value} />;
      }
  }
}

const Error = styled(Text)`
  color: red;
`;

import React from 'react';
import styled from 'styled-components';
import { useAppState } from '../state';
import { LogOutput } from './Output';

export const ErrorFallback: React.FC = ({ children }) => {
  const error = useAppState().error;

  const render = () => {
    if (typeof error === 'string') {
      return error;
    } else if (error instanceof Error) {
      return error.message;
    } else {
      return <LogOutput value={error} />;
    }
  };

  if (error) {
    return <ErrorWrapper>{render()}</ErrorWrapper>;
  } else {
    return <>{children}</>;
  }
};

const ErrorWrapper = styled.pre`
  margin: 8px;
  color: ${(p) => p.theme.colors.error};
`;

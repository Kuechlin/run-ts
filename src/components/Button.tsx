import React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { Text } from './Text';

type Props = {
  onClick?(): void;
  style?: React.CSSProperties;
  children?: ReactNode;
};
export default function ({ onClick, style, children }: Props) {
  return (
    <Button
      onClick={onClick}
      style={style}
      children={<Text children={children} />}
    />
  );
}

const Button = styled.div`
  border: 1px solid #404349;
  display: inline;
  cursor: pointer;
  color: #d4d4d4;
  padding: 4px;
  border-radius: 2px;
  z-index: 1;
  &:hover {
    border-color: #c678dd;
  }
`;

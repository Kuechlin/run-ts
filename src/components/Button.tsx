import React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { Text } from './Text';

type Props = {
  onClick?(): void;
  style?: React.CSSProperties;
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
};
export default function ({ onClick, style, children, icon, className }: Props) {
  return (
    <Button
      onClick={onClick}
      style={style}
      className={className}
      children={
        <>
          {icon}
          <Text children={children} />
        </>
      }
    />
  );
}

const Button = styled.div`
  border: 1px solid ${(p) => p.theme.colors.border};
  display: inline;
  cursor: pointer;
  color: ${(p) => p.theme.colors.foreground};
  padding: 4px;
  border-radius: 2px;
  z-index: 1;
  display: flex;
  align-items: center;

  &:hover {
    border-color: ${(p) => p.theme.colors.link};
  }
`;

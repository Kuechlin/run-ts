import React, { CSSProperties } from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

type TextProps = {
  strong?: boolean;
  center?: boolean;
  size?: number;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
};
export const Text = ({
  strong,
  children,
  size,
  center,
  style,
  className,
}: TextProps) => {
  return (
    <Span
      style={{
        fontWeight: strong ? 'bolder' : undefined,
        fontSize: size ? size + 'px' : undefined,
        textAlign: center ? 'center' : undefined,
        ...style,
      }}
      className={className}
      children={children}
    />
  );
};

const Span = styled.span`
  color: #dcdfe4;
  font-family: Consolas, 'Courier New', monospace;
  font-weight: normal;
  font-feature-settings: 'liga' 0, 'calt' 0;
  font-size: 16px;
`;

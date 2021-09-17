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
  color: ${(p) => p.theme.colors.foreground};
  font-family: ${(p) => p.theme.font.name};
  font-feature-settings: ${(p) => p.theme.font.feature};
  font-weight: normal;
  font-size: 16px;
`;

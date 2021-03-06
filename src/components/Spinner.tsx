import React from 'react';
import styled, { useTheme } from 'styled-components';

type Props = {
  size?: number;
  stroke?: number;
  color?: string;
};
export default function ({ size = 16, stroke = 2, color }: Props) {
  const { colors } = useTheme();
  return (
    <Spinner size={size} stroke={stroke} color={color || colors.foreground} />
  );
}

export const PageSpinner = () => {
  const { colors } = useTheme();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Spinner size={100} stroke={16} color={colors.foreground} />
    </div>
  );
};

const Spinner = styled.div<{ size: number; stroke: number; color: string }>`
  display: inline-block;
  &:after {
    content: ' ';
    display: block;
    width: ${(p) => p.size}px;
    height: ${(p) => p.size}px;
    border-radius: 50%;
    border: ${(p) => p.stroke}px solid ${(p) => p.color};
    border-color: ${(p) => p.color} transparent ${(p) => p.color} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

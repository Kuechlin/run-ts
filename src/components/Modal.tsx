import React from 'react';
import styled from 'styled-components';

type ModalProps = {
  open: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  onClose?(): void;
};
export default function Modal({ open, title, children, onClose }: ModalProps) {
  return (
    <Wrapper open={open} onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        {title && <Title className="text">{title}</Title>}
        {onClose && (
          <Button onClick={onClose}>
            <CloseIcon />
          </Button>
        )}
        {children}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ open: boolean }>`
  display: ${(p) => (p.open ? 'block' : 'none')};
  opacity: ${(p) => (p.open ? 1 : 0)};
  z-index: ${(p) => (p.open ? 100 : 0)};
  transition: opacity 0.5s ease;
  background-color: rgba(0, 0, 0, 0.6);

  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;

  padding-top: 200px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Content = styled.div`
  position: relative;
  background-color: #282c34;
  color: #d4d4d4;
  border-radius: 2px;
`;

const Title = styled.div`
  font-size: 24px;
  line-height: 42px;
  padding: 0px 8px;
  border-bottom: 1px solid #404349;
`;

const Button = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  color: #d4d4d4;
  transition: color 0.5s ease;
  cursor: pointer;

  &:hover {
    color: #404349;
  }
`;

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

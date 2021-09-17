import React, { useCallback, useState } from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { shadeColor } from '../utils/theme';
import Spinner from './Spinner';
import { Text } from './Text';

type SearchOption = {
  value: string;
  label: ReactNode;
};

type Props = {
  value?: string;
  onSearch(value: string): Promise<SearchOption[]>;
  onSelect(value: string): void;
};
export default function Search({ value, onSearch, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<SearchOption[]>([]);

  const handleOpen = (ev: React.MouseEvent) => {
    setOpen(true);
  };
  const handleClose = (ev: React.MouseEvent) => {
    ev.stopPropagation();
    setOpen(false);
  };

  const handleSearch = useCallback(
    async (ev: React.ChangeEvent<HTMLInputElement>) => {
      setLoading(true);
      setSearch(ev.target.value);
      setOptions(await onSearch(ev.target.value));
      setLoading(false);
    },
    []
  );

  const handleSelect = useCallback(
    (val: any) => (ev: React.MouseEvent) => {
      ev.preventDefault();
      ev.stopPropagation();
      setSearch(null);
      onSelect(val);
      setOpen(false);
    },
    []
  );

  return (
    <Wrapper onClick={handleOpen}>
      {open && <Cover onClick={handleClose} />}
      <InputWrapper open={open}>
        <Input value={search || value} onChange={handleSearch} />
        {loading && <Spinner />}
      </InputWrapper>
      <Options open={open}>
        {options.length === 0 && (
          <Text
            style={{
              padding: '4px 8px',
              display: 'block',
              color: 'rgba(255,255,255,0.2)',
            }}
          >
            no data
          </Text>
        )}
        {options.map((opt, i) => (
          <button onClick={handleSelect(opt.value)}>
            <Text>{opt.label}</Text>
          </button>
        ))}
      </Options>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: 64px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const InputWrapper = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  z-index: 1;

  padding: 4px 8px;

  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => (p.open ? '4px 4px 0px 0px' : '4px')};
  &:focus,
  &:hover {
    border-color: ${(p) => shadeColor(p.theme.colors.link, -20)};
  }
`;
const Input = styled.input`
  display: block;
  flex-grow: 1;
  background-color: transparent;

  outline: none;
  border: none;
  color: ${(p) => p.theme.colors.foreground};
  font-family: ${(p) => p.theme.font.name};
  font-feature-settings: ${(p) => p.theme.font.feature};
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

const Cover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Options = styled.div<{ open: boolean }>`
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 35px;
  right: 0;
  background-color: ${(p) => shadeColor(p.theme.colors.background, 20)};
  border-radius: 0px 0px 4px 4px;
  border: 1px solid ${(p) => p.theme.colors.border};

  display: ${(p) => (p.open ? 'block' : 'none')};
  max-height: ${(p) => (p.open ? '500px' : '0px')};
  transition: max-height 0.5s;

  button {
    outline: none;
    border: none;
    display: block;
    background-color: transparent;
    padding: 4px 8px;
    width: 100%;
    text-align: left;
    border-bottom: 1px solid ${(p) => p.theme.colors.border};
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;

    &:hover,
    &:focus {
      background-color: ${(p) => shadeColor(p.theme.colors.background, 40)};
    }
  }
  button:last-child {
    border: none;
  }
`;

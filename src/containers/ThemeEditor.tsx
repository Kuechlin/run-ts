import React, { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { Color } from '../components/Output';
import { Text } from '../components/Text';
import { SketchPicker } from 'react-color';
import { shadeColor, Theme } from '../utils/theme';
import { useActions, useAppState } from '../state';
import Button from '../components/Button';
import { ResetIcon } from '../components/Icons';

export default function ThemeEditor() {
  const theme = useAppState().theme;
  const actions = useActions();

  const handleChange = (key: string) => (color: string) => {
    actions.updateTheme({
      ...theme,
      colors: {
        ...theme.colors,
        [key]: color,
      },
    });
  };

  return (
    <Wrapper>
      {Object.entries(theme.colors).map(([key, color]) => (
        <Row key={key}>
          <Label>{key}</Label>
          <ColorPicker color={color} onChange={handleChange(key)} />
        </Row>
      ))}
      <ResetButton
        icon={<ResetIcon />}
        children="reset"
        onClick={actions.resetTheme}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ResetButton = styled(Button)`
  border: 2px solid ${(p) => p.theme.colors.border};
`;
const Row = styled.div`
  width: 40%;
  display: flex;
  padding: 4px;
  align-items: center;
`;

const Label = styled(Text)`
  width: 124px;
`;

const ColorPicker = ({
  color,
  onChange,
}: {
  color: string;
  onChange(color: string): void;
}) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((o) => !o);
  return (
    <ColorWrapper>
      <Color children={color} onClick={toggle} />
      <Popover open={open}>
        <Cover onClick={toggle} />
        <SketchPicker color={color} onChange={(e) => onChange(e.hex)} />
      </Popover>
    </ColorWrapper>
  );
};

const ColorWrapper = styled.div`
  position: relative;
`;
const Cover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Popover = styled.div<{ open: boolean }>`
  display: ${(p) => (p.open ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  .sketch-picker {
    background-color: ${(p) =>
      shadeColor(p.theme.colors.background, 30)} !important;

    * {
      color: ${(p) => p.theme.colors.foreground} !important;
      font-family: ${(p) => p.theme.font.name};
      font-feature-settings: ${(p) => p.theme.font.feature};
    }
    input {
      background-color: ${(p) => shadeColor(p.theme.colors.background, 10)};
      border: 1px solid ${(p) => p.theme.colors.border} !important;
      box-shadow: none !important;
      outline: none;
    }
  }
`;

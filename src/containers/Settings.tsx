import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { Text } from '../components/Text';
import ThemeEditor from './ThemeEditor';
import { shadeColor } from '../utils/theme';
import Importer from './Importer';
import { SettingIcon } from '../components/Icons';

export default function () {
  const [open, setState] = useState(false);
  const [active, setActive] = useState('importer');
  const toggle = useCallback(() => setState((s) => !s), []);

  return (
    <>
      <Button
        icon={<SettingIcon size={16} />}
        onClick={toggle}
        style={{ margin: '0px 8px' }}
      >
        settings
      </Button>
      <Modal open={open} onClose={toggle} title="settings">
        <Wrapper>
          <Menu
            active={active}
            items={['importer', 'theme']}
            onSelect={setActive}
          />
          <Content>
            {active === 'importer' && <Importer />}
            {active === 'theme' && <ThemeEditor />}
          </Content>
        </Wrapper>
      </Modal>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const Content = styled.div`
  flex-grow: 1;
  padding: 8px;
`;

const MenuWrapper = styled.div`
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  display: flex;
`;
const MenuItem = styled.div<{ active: boolean }>`
  padding: 8px;
  border-bottom: 2px solid ${(p) => p.theme.colors.border};
  margin-bottom: -2px;
  cursor: pointer;
  border-color: ${(p) => (p.active ? p.theme.colors.link : 'transparent')};

  &:hover {
    border-color: ${(p) => shadeColor(p.theme.colors.foreground, 40)};
  }
`;
type MenuProps = {
  active: string;
  items: string[];
  onSelect?(val: string): void;
};
const Menu = ({ items, active, onSelect }: MenuProps) => {
  return (
    <MenuWrapper>
      {items.map((item) => (
        <MenuItem
          active={item === active}
          onClick={() => onSelect && onSelect(item)}
          key={item}
        >
          <Text>{item}</Text>
        </MenuItem>
      ))}
    </MenuWrapper>
  );
};

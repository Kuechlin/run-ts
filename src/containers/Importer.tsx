import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Modal from '../components/Modal';
import Table from '../components/Table';
import AsyncSelect from 'react-select/async';
import debounce from '../utils/debounce';
import styled from 'styled-components';
import Spinner from '../components/Spinner';
import { useActions, useAppState, useEffects } from '../state';
import Button from '../components/Button';

export default () => {
  const [open, setState] = useState(false);
  const imports = useAppState().imports;
  const actions = useActions();

  const toggle = useCallback(() => setState((s) => !s), []);

  return (
    <>
      <Button onClick={toggle}>importer</Button>
      <Modal open={open} onClose={toggle} title="importer">
        <Wrapper>
          <PackageSearch open={open} />
          <Table
            rowKey={'name'}
            columns={[
              {
                name: 'name',
                render: (pkg) => pkg.name,
              },
              {
                name: 'version',
                render: (pkg) => pkg.version,
              },
              {
                name: 'actions',
                render: (pkg) =>
                  pkg.isDependency ? (
                    <small children="dependency" />
                  ) : (
                    <Button onClick={() => actions.unload(pkg.name)}>
                      delete
                    </Button>
                  ),
              },
            ]}
            data={Object.values(imports)}
          />
        </Wrapper>
      </Modal>
    </>
  );
};

const Wrapper = styled.div`
  > * {
    margin: 8px;
  }

  em {
    color: #c678dd;
  }
`;

type PackageOption = {
  value: string;
  label: ReactNode;
};

const PackageSearch = ({ open }: { open: boolean }) => {
  const ref = useRef<AsyncSelect<any>>(null);
  const [selected, setSelected] = useState<PackageOption | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const effects = useEffects();
  const actions = useActions();

  useEffect(() => {
    if (open) {
      ref.current?.focus();
    }
  }, [open]);

  const search = debounce(effects.search, 1000);

  const install = async () => {
    if (selected && !loading) {
      try {
        setLoading(true);
        console.log(selected);
        await actions.install({ name: selected.value });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        setSelected(null);
      }
    }
  };

  return (
    <SelectWrapper>
      <div style={{ flexGrow: 1 }}>
        <AsyncSelect<PackageOption>
          ref={ref}
          isDisabled={loading}
          cacheOptions
          loadOptions={search}
          value={selected}
          onChange={setSelected}
          isClearable
          styles={{
            control: (base, { isFocused }) => ({
              ...base,
              backgroundColor: 'transparent',
              border: '1px solid #404349',
              outline: isFocused ? 'blue' : 'none',
            }),
            menu: (base) => ({
              ...base,
              backgroundColor: '#404349',
            }),
            option: (base, { isFocused, isSelected }) => ({
              ...base,
              backgroundColor: isFocused || isSelected ? '#98c379' : '#404349',
            }),
            singleValue: (base) => ({
              ...base,
              color: '#d4d4d4',
            }),
            input: (base) => ({
              ...base,
              color: '#d4d4d4',
            }),
          }}
        />
      </div>
      <InstallIcon loading={loading} onClick={install} />
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  height: 24px;
  width: 24px;
  padding: 6px;
  margin-left: 8px;
  border: 1px solid #404349;
  cursor: pointer;
  border-radius: 4px;
  z-index: 1;
  &:hover {
    border-color: #c678dd;
  }
`;
const InstallIcon = ({
  onClick,
  loading,
}: {
  onClick(): void;
  loading: boolean;
}) => (
  <Icon onClick={onClick}>
    {loading ? (
      <Spinner size={20} color="#4dc4ff" />
    ) : (
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
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
        />
      </svg>
    )}
  </Icon>
);

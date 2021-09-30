import React, { useCallback, useState } from 'react';
import Modal from '../components/Modal';
import Table from '../components/Table';
import styled from 'styled-components';
import { useActions, useAppState } from '../state';
import Button from '../components/Button';
import { useEffects } from '../state';
import debounce from '../utils/debounce';
import Search from '../components/Search';
import Spinner from '../components/Spinner';
import { DeleteIcon, InstallIcon } from '../components/Icons';

export default () => {
  const imports = useAppState().imports;
  const actions = useActions();

  return (
    <>
      <Wrapper>
        <PackageSearch />
        <Table
          style={{ width: 'calc(100% - 8px)' }}
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
              name: '',
              render: (pkg) =>
                pkg.isDependency ? (
                  <small children="dep" />
                ) : (
                  <Button
                    onClick={() => actions.unload(pkg.name)}
                    icon={<DeleteIcon size={16} />}
                  />
                ),
            },
          ]}
          data={Object.values(imports)}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  > * {
    margin: 8px;
  }

  em {
    color: ${(p) => p.theme.colors.link};
  }
`;

function PackageSearch() {
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const effects = useEffects();
  const actions = useActions();

  const search = debounce(effects.search, 1000);

  const install = async () => {
    if (selected && !loading) {
      try {
        setLoading(true);
        console.log(selected);
        await actions.install({ name: selected });
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
        <Search
          value={selected || ''}
          onSearch={search}
          onSelect={setSelected}
        />
      </div>
      <InstallButton
        icon={<InstallIcon loading={loading} onClick={install} />}
      />
    </SelectWrapper>
  );
}

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InstallButton = styled(Button)`
  border-radius: 4px;
  margin-left: 8px;
`;

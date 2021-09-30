import React from 'react';
import styled from 'styled-components';
import { shadeColor } from '../utils/theme';
import { Text } from './Text';

type TableProps<T> = {
  rowKey: string;
  columns: {
    name: string;
    render: (data: T, i: number) => React.ReactNode;
  }[];
  data: T[];
  style?: React.CSSProperties;
};
export default function <T extends Record<string, any>>({
  rowKey,
  columns,
  data,
  style,
}: TableProps<T>) {
  return (
    <Table style={style}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.name} children={<Text children={col.name} />} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={item[rowKey]}>
            {columns.map((col) => (
              <td
                key={col.name}
                children={<Text children={col.render(item, i)} />}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  border-collapse: collapse;

  td,
  th {
    text-align: left;
    border: 1px solid ${(p) => p.theme.colors.border};
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: ${(p) => shadeColor(p.theme.colors.background, -10)};
  }
`;

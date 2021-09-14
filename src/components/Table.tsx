import React from 'react';
import styled from 'styled-components';

type TableProps<T> = {
  rowKey: string;
  columns: {
    name: string;
    render: (data: T, i: number) => React.ReactNode;
  }[];
  data: T[];
};
export default function <T extends Record<string, any>>({
  rowKey,
  columns,
  data,
}: TableProps<T>) {
  return (
    <Table className="text">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.name} children={col.name} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={item[rowKey]}>
            {columns.map((col) => (
              <td key={col.name} children={col.render(item, i)} />
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  border-collapse: collapse;
  min-width: 400px;

  td,
  th {
    text-align: left;
    border: 1px solid #404349;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #1d2026;
  }
`;

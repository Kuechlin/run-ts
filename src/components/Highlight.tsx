import React, { Fragment, ReactNode } from 'react';
import { Text } from './Text';

type HighlightProps = {
  value: any;
  prefix?: ReactNode;
};
export const Highlight = ({ value, ...rest }: HighlightProps) => {
  if (!!value && typeof value === 'object') {
    return <GroupHighlight value={value} {...rest} />;
  } else {
    return <ValueHighlight value={value} {...rest} />;
  }
};

const Tab = () => (
  <span
    style={{
      display: 'inline-block',
      width: '24px',
      height: '8px',
    }}
  />
);

const GroupHighlight = ({ value, prefix }: HighlightProps) => {
  const isArray = Array.isArray(value);
  const symbol = isArray ? '[]' : '{}';

  return (
    <>
      <Text children={symbol[0]} />
      <br />
      {Object.entries(value).map(([key, value]) => (
        <Fragment key={key}>
          {prefix}
          <Tab />
          {!isArray && <Text>{key}: </Text>}
          <Highlight
            value={value}
            prefix={
              <>
                {prefix}
                <Tab />
              </>
            }
          />
          <Text>,</Text>
          <br />
        </Fragment>
      ))}
      {prefix}
      <Text children={symbol[1]} />
    </>
  );
};

const ValueHighlight = ({ value }: HighlightProps) => {
  var val = value?.toString();
  if (value === undefined) val = 'undefined';
  if (value === null) val = 'null';

  return (
    <Text
      children={val}
      style={{
        color: type_color_map[typeof value] || type_color_map['default'],
      }}
    />
  );
};

const type_color_map: Record<string, string> = {
  number: '#56B6C2',
  string: '#98C379',
  boolean: '#C678DD',
  default: '#E5C07B',
};

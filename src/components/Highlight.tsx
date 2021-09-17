import React, { Fragment, ReactNode } from 'react';
import { useTheme } from 'styled-components';
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
  const { colors } = useTheme();

  var val = value?.toString();
  if (value === undefined) val = 'undefined';
  if (value === null) val = 'null';

  let color;
  switch (typeof value) {
    case 'string':
      color = colors.string;
      break;
    case 'number':
      color = colors.number;
      break;
    case 'boolean':
      color = colors.keyword;
      break;
    default:
      color = colors.type;
      break;
  }
  return (
    <Text
      children={val}
      style={{
        color: color,
      }}
    />
  );
};

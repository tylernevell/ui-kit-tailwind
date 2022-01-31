import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import { useInterval } from './use-interval';
import { Typography } from '../../components/typography/typography';

const Block: React.VoidFunctionComponent = () => {
  const [count, updateCount] = useState(0);
  useInterval(() => {
    updateCount((s) => s + 1);
  }, 1000);
  return <>{count}</>;
};
export default {
  title: 'Components/Hooks/UseInterval',
  component: Block,
} as ComponentMeta<typeof Block>;

export const Basic = {
  args: {},
  parameters: {
    design: { type: 'figma', url: '' },
    status: { type: 'wip' },
  },
};

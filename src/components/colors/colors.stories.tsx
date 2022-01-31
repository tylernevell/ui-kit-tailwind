import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Colors } from './colors';

const Block: React.VoidFunctionComponent = () => <h1>WIP</h1>;
export default {
  title: 'Components/Colors',
  component: Colors,
} as ComponentMeta<typeof Block>;

export const Basic = {
  args: {},
  parameters: {},
};

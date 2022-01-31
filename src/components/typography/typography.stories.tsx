import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Typography } from './typography';
import type { PropsType } from './types';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {},
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <>
    <Typography {...args} />
  </>
);

export const TypographyExamples = Template.bind({});
TypographyExamples.args = {
  children: 'Typography',
  preset: 'heading',
  color: 'text-primary-default',
};

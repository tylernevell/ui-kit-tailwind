import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from './checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const CustomCheckbox = Template.bind({});
CustomCheckbox.args = {};

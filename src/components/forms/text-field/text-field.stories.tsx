import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from './text-field';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {},
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const CustomTextField = Template.bind({});
CustomTextField.args = {
  validationFunction: (value: string) => value.length > 8,
  placeholder: 'Name > 8 Chars',
};

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioButton } from './radio-button';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {},
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <form>
    <RadioButton {...args} />
  </form>
);

export const CustomRadioButton = Template.bind({});
CustomRadioButton.args = {};

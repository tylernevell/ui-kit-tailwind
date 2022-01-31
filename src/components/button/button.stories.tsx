import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <>
    <Button {...args} />
    <br />
    <Button {...args} buttonType="secondary" type="button" />
    <br />
    <Button {...args} buttonType="flat" type="button" />
  </>
);

export const CustomButton = Template.bind({});
CustomButton.args = {
  type: 'button',
  buttonType: 'primary',
  typographyProps: { color: 'text-on-red-light' },
};

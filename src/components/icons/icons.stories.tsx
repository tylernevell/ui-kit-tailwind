import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icons } from './icons';

export default {
  title: 'Components/Icons',
  component: Icons,
  argTypes: {},
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Icons> = () => <Icons />;

export const IconsDisplay = Template.bind({});
IconsDisplay.args = {};

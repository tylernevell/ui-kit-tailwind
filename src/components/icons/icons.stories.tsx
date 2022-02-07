import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CancelSVG } from './cancel-svg';
import { CheckmarkSVG } from './checkmark-svg';
import { Icons } from './icons';
import { InfoSVG } from './info-svg';
import { MagnifyingGlassSVG } from './magnifying-glass-svg';

export default {
  title: 'Components/Icons',
  component: Icons,
  argTypes: {},
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Icons> = () => (
  <div className="flex">
    <MagnifyingGlassSVG />
    <CancelSVG />
    <CheckmarkSVG />
    <InfoSVG />
  </div>
);

export const IconsDisplay = Template.bind({});
IconsDisplay.args = {};

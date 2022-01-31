import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Shadow } from './shadow';

export default {
  title: 'Components/Shadow',
  component: Shadow,
  argTypes: {},
} as ComponentMeta<typeof Shadow>;

const Template: ComponentStory<typeof Shadow> = (args) => (
  <div
    style={{
      display: 'grid',
      gap: '3rem',
      width: '20rem',
    }}
  >
    <Shadow {...args}>
      <div style={{ width: '300px', height: '100px' }}>default</div>
    </Shadow>
    <Shadow shadowType="error">
      <div style={{ width: '300px', height: '100px' }}>error</div>
    </Shadow>
    <Shadow shadowType="success">
      <div style={{ width: '300px', height: '100px' }}>success</div>
    </Shadow>
    <Shadow shadowType="hover">
      <div style={{ width: '300px', height: '100px' }}>hover</div>
    </Shadow>
    <Shadow shadowType="active">
      <div style={{ width: '300px', height: '100px' }}>active</div>
    </Shadow>
  </div>
);

export const Shadows = Template.bind({});
Shadows.args = {
  shadowType: 'default',
};

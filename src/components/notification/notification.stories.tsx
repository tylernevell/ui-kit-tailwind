import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Notification } from './notification';

export default {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {},
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
  <>
    <Notification type="success" title="Head">
      Description
    </Notification>
    <br />
    <Notification type="success-no-buttons" title="Head">
      Description
    </Notification>
    <br />
    <Notification type="success-description">Description</Notification>
    <br />
    <Notification type="error" title="Head">
      Description
    </Notification>
    <br />
    <Notification type="error" title="Head" />
    <br />
    <Notification type="information" title="Head">
      Description
    </Notification>
  </>
);

export const CustomNotification = Template.bind({});
CustomNotification.args = {};

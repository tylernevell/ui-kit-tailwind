import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Notification } from './notification';

export default {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {},
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => {
  const [isOpen, setIsOpen] = useState(true);
  const [helpUser, setHelpUser] = useState(false);

  const onCloseHandler = () => {
    setIsOpen(false);
  };

  const onHelpHandler = () => {
    setHelpUser(true);
  };
  return (
    <>
      {isOpen && (
        <Notification
          type="success"
          title="Head"
          onClose={onCloseHandler}
          onHelp={onHelpHandler}
        >
          This notifications buttons are enabled. The rest are disabled.
        </Notification>
      )}
      {helpUser && 'This is where a help modal can go.'}
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
};

export const CustomNotification = Template.bind({});
CustomNotification.args = {};

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { ModalNotification } from '../notification/modal-notification';
import { Modal } from './modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
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
        <ModalNotification
          title="Modal Notify"
          type="success"
          overlayId="overlay"
          onClose={onCloseHandler}
          onHelp={onHelpHandler}
        />
      )}
      {helpUser && 'Put help modal here.'}
    </>
  );
};

export const CustomModal = Template.bind({});
CustomModal.args = {};

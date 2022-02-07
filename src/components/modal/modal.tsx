import ReactDOM from 'react-dom';
import type { ModalProps, ModalOverlayProps, BackdropProps } from './types';

/*
  TODO:
    1. Add styles for different types of modal backdrops
*/

const Backdrop = (props: BackdropProps) => {
  return <div></div>;
};

const ModalOverlay = (props: ModalOverlayProps) => {
  const { children } = props;

  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

const Modal = (props: ModalProps) => {
  const { children, overlayId = 'overlay', backdropType } = props;

  const portalElement = document.getElementById(overlayId);
  console.log(portalElement);
  return (
    <>
      {portalElement
        ? ReactDOM.createPortal(<Backdrop type={backdropType} />, portalElement)
        : ''}
      {portalElement
        ? ReactDOM.createPortal(
            <ModalOverlay>{children}</ModalOverlay>,
            portalElement
          )
        : ''}
    </>
  );
};

export { Modal };

import { ReactNode } from 'react';

type BackdropTypes = '' | 'notification';

interface BackdropProps {
  type: BackdropTypes;
}

interface ModalOverlayProps {
  children: string | ReactNode;
}

interface ModalProps {
  children: string | ReactNode;
  overlayId: string;
  backdropType: BackdropTypes;
}

export type { ModalProps, ModalOverlayProps, BackdropProps };

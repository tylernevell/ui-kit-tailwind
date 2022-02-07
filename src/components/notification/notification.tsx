import { ReactNode } from 'react';
import { Modal } from '../modal/modal';
import { Typography } from '../typography/typography';
import { NotificationButtons } from './notification-buttons';
import { ErrorIcon, InfoIcon, SuccessIcon } from './notification-icons';

interface NotificationProps {
  type:
    | 'success'
    | 'success-description'
    | 'success-no-buttons'
    | 'error'
    | 'information';
  title?: string;
  width?: 'full' | 'responsive';
  children?: string | ReactNode;
  onClose?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  onHelp?: (event: React.MouseEvent | React.KeyboardEvent) => void;
}

const Notification = (props: NotificationProps) => {
  const {
    type,
    title,
    width = 'responsive',
    children = 'description',
    onClose,
    onHelp,
  } = props;
  const isResponsive = width === 'responsive' ? '' : 'w-full';

  let buttons, icon;

  switch (type) {
    case 'success':
      buttons = <NotificationButtons onClose={onClose} onHelp={onHelp} />;
      icon = <SuccessIcon />;
      break;
    case 'success-no-buttons':
      icon = <SuccessIcon />;
      break;
    case 'success-description':
      icon = <SuccessIcon />;
      break;
    case 'error':
      buttons = <NotificationButtons onClose={onClose} onHelp={onHelp} />;
      icon = <ErrorIcon />;
      break;
    case 'information':
      buttons = <NotificationButtons onClose={onClose} onHelp={onHelp} />;
      icon = <InfoIcon />;
      break;
  }

  return (
    <div
      className={`relative max-w-sm p-5 rounded-md shadow-default shadow-primary active:shadow-gray-light ${isResponsive}`}
    >
      <div className="flex relative w-full">
        <div className="basis-4/5 whitespace-normal mr-4 my-auto">
          {title ? (
            <Typography preset="paragraph1" className="font-bold mb-2">
              {title}
            </Typography>
          ) : (
            ''
          )}
          <Typography preset="paragraph2" className="">
            {children}
          </Typography>
        </div>
        <div className="flex basis-1/5 justify-end">{icon}</div>
      </div>
      {buttons}
    </div>
  );
};

export { Notification };
export type { NotificationProps };

import { Button } from '../button/button';

interface NotificationButtonsProps {
  onClose?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  onHelp?: (event: React.MouseEvent | React.KeyboardEvent) => void;
}

const NotificationButtons = (props: NotificationButtonsProps) => {
  const { onClose, onHelp } = props;

  return (
    <div className="mt-5 flex">
      <Button
        buttonType="secondary"
        type="button"
        className="mr-2"
        onClick={onClose}
      >
        Close
      </Button>
      <Button buttonType="flat" type="button" onClick={onHelp}>
        Help
      </Button>
    </div>
  );
};

export { NotificationButtons };

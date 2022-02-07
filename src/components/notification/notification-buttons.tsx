import { Button } from '../button/button';

const NotificationButtons = () => {
  return (
    <div className="mt-5 flex">
      <Button buttonType="secondary" type="button" className="mr-2">
        Close
      </Button>
      <Button buttonType="flat" type="button">
        Help
      </Button>
    </div>
  );
};

export { NotificationButtons };

import { CancelSVG } from '../icons/cancel-svg';
import { CheckmarkSVG } from '../icons/checkmark-svg';
import { InfoSVG } from '../icons/info-svg';

const SuccessIcon = () => {
  return (
    <div className="flex flex-none bg-green-100 w-14 h-14 rounded-full">
      <CheckmarkSVG className="relative m-auto fill-green-default" />
    </div>
  );
};

const ErrorIcon = () => {
  return (
    <div className="flex flex-none bg-red-lighter w-14 h-14 rounded-full pl-1 pt-px">
      <CancelSVG className="relative m-auto fill-red-default" />
    </div>
  );
};

const InfoIcon = () => {
  return (
    <div className="flex flex-none bg-secondary-active w-14 h-14 rounded-full">
      <InfoSVG className="relative m-auto fill-primary-default" />
    </div>
  );
};

export { SuccessIcon, ErrorIcon, InfoIcon };

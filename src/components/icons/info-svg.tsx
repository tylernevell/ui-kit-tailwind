import { FunctionComponent } from 'react';
import type { SVGPropsType } from './types';

const InfoSVG: FunctionComponent<SVGPropsType> = (props) => {
  const { width = 20, height = 20, viewBox = '0 0 24 22', className } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 7H13V5H11V7ZM12 18C7.59 18 4 14.41 4 10C4 5.59 7.59 2 12 2C16.41 2 20 5.59 20 10C20 14.41 16.41 18 12 18ZM12 0C10.6868 0 9.38642 0.258658 8.17317 0.761205C6.95991 1.26375 5.85752 2.00035 4.92893 2.92893C3.05357 4.8043 2 7.34784 2 10C2 12.6522 3.05357 15.1957 4.92893 17.0711C5.85752 17.9997 6.95991 18.7362 8.17317 19.2388C9.38642 19.7413 10.6868 20 12 20C14.6522 20 17.1957 18.9464 19.0711 17.0711C20.9464 15.1957 22 12.6522 22 10C22 8.68678 21.7413 7.38642 21.2388 6.17317C20.7362 4.95991 19.9997 3.85752 19.0711 2.92893C18.1425 2.00035 17.0401 1.26375 15.8268 0.761205C14.6136 0.258658 13.3132 0 12 0ZM11 15H13V9H11V15Z" />
    </svg>
  );
};

export { InfoSVG };

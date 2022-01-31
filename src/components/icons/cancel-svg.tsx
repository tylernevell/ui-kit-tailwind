import { FunctionComponent } from 'react';
import type { SVGPropsType } from './types';

const CancelSVG: FunctionComponent<SVGPropsType> = (props) => {
  const { width = 16, height = 16, viewBox = '0 0 16 16', className } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.334958 10.0461C-0.111978 10.4931 -0.111978 11.2177 0.334958 11.6646C0.781895 12.1116 1.50652 12.1116 1.95346 11.6646L5.9998 7.6183L10.0463 11.6648C10.4932 12.1117 11.2179 12.1117 11.6648 11.6648C12.1117 11.2178 12.1117 10.4932 11.6648 10.0463L7.6183 5.9998L11.6645 1.95364C12.1114 1.5067 12.1114 0.782077 11.6645 0.335141C11.2175 -0.111795 10.4929 -0.111795 10.046 0.335141L5.9998 4.3813L1.95379 0.335295C1.50685 -0.111641 0.782226 -0.111641 0.335289 0.335295C-0.111647 0.782231 -0.111647 1.50686 0.335289 1.95379L4.3813 5.9998L0.334958 10.0461Z"
      />
    </svg>
  );
};

export { CancelSVG };

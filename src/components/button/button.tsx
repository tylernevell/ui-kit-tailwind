import { AriaAttributes, forwardRef, ReactNode } from 'react';
import { TypographyFieldsType } from '../typography/types';
import { Typography } from '../typography/typography';

/* 
  TODO:
    1. Fix typographyProps - custom attributes are not overwriting defaults...
*/

type ButtonTypes = 'primary' | 'secondary' | 'flat';

type ButtonPropTypes = {
  children?: ReactNode;
  typographyProps?: TypographyFieldsType;
  type: 'submit' | 'button' | 'reset' | undefined;
  buttonType?: ButtonTypes;
  ariaLabel?: string;
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  dataToggle?: string;
  ariaHasPopup?: AriaAttributes['aria-haspopup'];
  ariaExpanded?: AriaAttributes['aria-expanded'];
  // ref?: React.Ref<HTMLButtonElement> | ((instance: HTMLButtonElement) => void);
  disabled?: boolean;
  buttonWidth?: 'full' | 'responsive';
  buttonHeight?: 'small' | 'medium' | 'large';
  dataAction?: DOMStringMap;
  dataId?: string;
  dataReview?: string;
  id?: string;
  name?: string;
  className?: string;
};

type RefType = HTMLButtonElement;

const Button = forwardRef<RefType, ButtonPropTypes>((props, ref) => {
  const {
    children = 'Button',
    typographyProps = {},
    type = 'button',
    buttonType = 'default',
    ariaLabel,
    onClick,
    dataToggle,
    ariaHasPopup,
    ariaExpanded,
    disabled = false,
    buttonWidth = 'responsive',
    buttonHeight = 'medium',
    dataAction,
    dataId,
    id,
    name,
    className,
  } = props;

  let buttonTypeClasses =
    'grid gap-2 grid-flow-col px-5 py-1 items-center justify-center whitespace-nowrap ' +
    'text-base rounded transition-all duration-200 ease-in-out ' +
    'disabled:cursor-not-allowed drop-shadow-sm shadow-sm shadow font-medium ';

  const typographyPropsFinal = typographyProps;

  switch (buttonType) {
    case 'secondary':
      buttonTypeClasses +=
        'bg-white-default border ring-2 ring-primary-default ' +
        'disabled:text-primary-disabled disabled:ring-primary-disabled disabled:bg-white-default disabled:border-transparent ' +
        'hover:bg-secondary-hover active:bg-secondary-active active:border-gray-default ' +
        'focus:border-transparent focus:ring-2 focus:ring-gray-default ';
      typographyPropsFinal.color = 'text-primary-default';
      break;
    case 'flat':
      buttonTypeClasses +=
        'bg-white-default border drop-shadow-none shadow-none border-transparent hover:bg-secondary-hover ' +
        'disabled:text-primary-disabled disabled:ring-primary-disabled disabled:bg-white-default disabled:border-transparent ' +
        'active:bg-secondary-active active:border-gray-default ' +
        'focus:ring-2 focus:ring-gray-default focus:border-transparent ';
      typographyPropsFinal.color = 'text-primary-default';
      break;
    default:
      buttonTypeClasses +=
        'text-white-default border bg-primary-default ' +
        'disabled:bg-primary-disabled disabled:ring-transparent disabled:border-transparent ' +
        'hover:bg-primary-hover active:bg-primary-active active:border-gray-default ' +
        'focus:ring-2 focus:ring-gray-default focus:border-transparent ';
      typographyPropsFinal.color = 'text-white-default';
  }

  Object.assign(typographyPropsFinal, typographyProps);

  switch (buttonHeight) {
    case 'small':
      buttonTypeClasses += 'h-8 ';
      break;
    case 'large':
      buttonTypeClasses += 'h-11 ';
      break;
    default:
      buttonTypeClasses += 'h-9 ';
  }

  buttonTypeClasses += buttonWidth === 'responsive' ? '' : 'w-full';

  return (
    <button
      data-toggle={dataToggle}
      data-action={dataAction}
      data-id={dataId}
      aria-haspopup={ariaHasPopup}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
      id={id}
      name={name}
      ref={ref}
      className={`${buttonTypeClasses} ${className}`}
      type={type}
      onClick={onClick}
      onKeyPress={onClick}
      tabIndex={0}
      disabled={disabled}
    >
      <Typography preset="custom" {...typographyPropsFinal}>
        {children}
      </Typography>
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
export type { ButtonPropTypes, ButtonTypes, RefType };

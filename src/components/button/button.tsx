import { AriaAttributes, forwardRef, ReactNode } from 'react';
import { TypographyFieldsType } from '../typography/types';
import { Typography } from '../typography/typography';
import styles from './button.module.css';

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
  buttonWidth?: 'w-full' | 'responsive';
  buttonHeight?: 'small' | 'medium' | 'large';
  dataAction?: DOMStringMap;
  dataId?: string;
  dataReview?: string;
  id?: string;
  name?: string;
  className?: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonPropTypes>((props, ref) => {
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

  switch (buttonType) {
    case 'secondary':
      if (disabled) {
        typographyProps.color = 'text-primary-disabled';
      } else {
        typographyProps.color = 'text-primary-default';
      }
      break;
    case 'flat':
      if (disabled) {
        typographyProps.color = 'text-primary-disabled';
      } else {
        typographyProps.color = 'text-primary-default';
      }
      break;
    default:
      typographyProps.color = 'text-white-default';
  }

  const isResponsive = buttonWidth === 'responsive' ? '' : 'w-full';

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
      className={`${styles['btn-base']} ${styles[buttonType]} ${styles[buttonHeight]} ${isResponsive} ${className}`}
      type={type}
      onClick={onClick}
      onKeyPress={onClick}
      tabIndex={0}
      disabled={disabled}
    >
      <Typography preset="custom" {...typographyProps}>
        {children}
      </Typography>
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
export type { ButtonPropTypes, ButtonTypes };

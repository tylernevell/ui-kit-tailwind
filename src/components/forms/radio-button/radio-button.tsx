import { forwardRef } from 'react';
import styles from './radio-button.module.css';
/*
  TODO:
    1. Add and fix disabled CSS class
    2. Add typography for name
*/

interface RadioProps {
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  ariaChecked?: boolean;
  onChange?: (event: React.ChangeEvent) => void;
  className?: string;
}

const RadioButton = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const {
    name = 'Text',
    value = 'text',
    checked,
    disabled,
    ariaChecked = false,
    onChange,
    className,
  } = props;

  return (
    <label
      htmlFor={value}
      aria-labelledby="gdesc1"
      className="text-lg inline-flex flex-nowrap gap-2.5 cursor-pointer"
    >
      <input
        type="radio"
        id={value}
        ref={ref}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        aria-checked={ariaChecked}
        onChange={onChange}
        className={`${styles['input-base']} ${className}`}
      />
      <span
        className={`text-black-default ${
          disabled ? 'cursor-not-allowed text-gray-default ' : ''
        }`}
      >
        {name}
      </span>
    </label>
  );
});

RadioButton.displayName = 'RadioButton';

export { RadioButton };

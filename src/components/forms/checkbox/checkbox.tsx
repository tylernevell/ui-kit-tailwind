import { forwardRef } from 'react';
import styles from './checkbox.module.css';

interface CheckboxProps {
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  ariaChecked?: boolean;
  onChange?: (event: React.ChangeEvent) => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    name = 'Text',
    value = 'text',
    checked,
    disabled,
    ariaChecked = false,
    onChange,
  } = props;

  return (
    <label
      htmlFor={value}
      aria-labelledby="gdesc1"
      className="text-base inline-flex flex-nowrap gap-2.5 cursor-pointer "
    >
      <input
        type="checkbox"
        id={value}
        ref={ref}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        aria-checked={ariaChecked}
        onChange={onChange}
        className={styles['checkbox-primary']}
      />
      <span
        className={`${
          disabled
            ? 'cursor-not-allowed text-gray-default '
            : 'text-black-default '
        }`}
      >
        {name}
      </span>
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };

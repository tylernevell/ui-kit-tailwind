import { forwardRef } from 'react';

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
  // onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  onChange?: (event: React.ChangeEvent) => void;
}

const RadioButton = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const {
    name = 'Text',
    value = 'text',
    checked,
    disabled,
    ariaChecked = false,
    // onClick,
    onChange,
  } = props;

  const inputClasses =
    'h-5 w-5 self-center transition-all duration-200 ease-in-out cursor-pointer ' +
    'border-primary-default border-2 checked:bg-primary-default checked:hover:bg-primary-hover ' +
    'checked:focus:bg-primary-default focus:checked:ring-2 focus:checked:ring-primary-default ' +
    'disabled:cursor-not-allowed hover:bg-secondary-active focus:hover:bg-primary-hover ';

  return (
    <label
      htmlFor={value}
      aria-labelledby="gdesc1"
      className="text-base inline-flex flex-nowrap gap-2.5 cursor-pointer"
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
        // onClick={onClick}
        onChange={onChange}
        className={inputClasses}
      />
      <span className="text-black-default">{name}</span>
    </label>
  );
});

RadioButton.displayName = 'RadioButton';

export { RadioButton };

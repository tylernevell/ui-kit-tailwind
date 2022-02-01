import React, { forwardRef, useState } from 'react';
import { Shadow } from '../../shadows/shadow';
import { Typography } from '../../typography/typography';
import styles from './text-field.module.css';

/*
  TODO:
    1. Make input passable to other components and APIs
    2. Add AriaLabels
    3. Style for Success and Autofill (logic needs work)
    4. consider debounce for error checking
*/

interface TextFieldProps {
  placeholder: string;
  id: string;
  name: string;
  validationFunction: (value: string) => boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { placeholder, id, name, validationFunction } = props;

  const [enteredValue, setEnteredValue] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  const [formIsEntered, setFormIsEntered] = useState(false);
  const [isNotTouchedYet, setIsNotTouchedYet] = useState(true);

  const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };

  const focusHandler = () => {
    setIsNotTouchedYet(false);
  };

  const validationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormIsEntered(true);
    setFormIsValid(validationFunction(e.target.value));
  };

  return (
    <Shadow shadowType={formIsValid === formIsEntered ? 'default' : 'error'}>
      <div
        className={`${
          formIsValid === formIsEntered
            ? 'bg-white-transparent'
            : 'bg-red-light'
        } ${styles['text-form']}`}
      >
        <label htmlFor={id} className="pt-0 mt-0 cursor-text">
          <Typography
            preset={isNotTouchedYet ? 'paragraph2' : 'paragraph3'}
            className={`${
              isNotTouchedYet ? 'mb-0 mt-4' : 'mt-[0.31rem] mb-[0.06rem] '
            } text-gray-default`}
          >
            {placeholder}
          </Typography>
          <input
            type="text"
            ref={ref}
            id={id}
            name={name}
            value={enteredValue}
            onChange={valueChangeHandler}
            onFocus={focusHandler}
            onBlur={validationHandler}
            className={`${isNotTouchedYet ? 'h-0' : ''} ${styles.field}`}
          />
        </label>
      </div>
    </Shadow>
  );
});

TextField.displayName = 'TextField';

export { TextField };

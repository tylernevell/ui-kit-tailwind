import { forwardRef, useState } from 'react';
import { Button } from '../../button/button';
import { CancelSVG } from '../../icons/cancel-svg';
import { MagnifyingGlassSVG } from '../../icons/magnifying-glass-svg';
import { Shadow } from '../../shadows/shadow';
import styles from './search-field.module.css';

/* 
  TODO: 
    0. FINISH RESULTS DROPDOWN
    1. Fix autofill style. Autofill needs playing with
    2. Add debounce hook
    3. Revisit whether or not to have width limit
*/

interface SearchFieldProps {
  placeholder: string;
  id: string;
  name: string;
  validationFunction?: (value: string) => boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  (props, ref) => {
    const {
      placeholder,
      id,
      name,
      validationFunction = (value: string) => value.length > 0,
    } = props;

    const [enteredValue, setEnteredValue] = useState('');
    const [formIsValid, setFormIsValid] = useState(false);
    const [isNotTouchedYet, setIsNotTouchedYet] = useState(true);

    const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEnteredValue(e.target.value);
    };

    const focusHandler = () => {
      setIsNotTouchedYet(false);
    };

    const validationHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormIsValid(validationFunction(e.target.value));
      console.log(validationFunction);
    };

    const resetInputFieldHandler = () => {
      setEnteredValue('');
      setFormIsValid(false);
    };

    return (
      <div className="shadow-default shadow-primary">
        <div className={styles['search-box']}>
          <Button
            type="submit"
            buttonType="flat"
            buttonHeight="large"
            className={`${styles['search-button']}`}
          >
            <MagnifyingGlassSVG
              className={
                formIsValid ? 'fill-black-default' : 'fill-gray-default'
              }
            />
          </Button>
          <input
            type="text"
            ref={ref}
            id={id}
            name={name}
            value={enteredValue}
            placeholder={placeholder}
            onChange={valueChangeHandler}
            onFocus={focusHandler}
            onBlur={validationHandler}
            className={`${isNotTouchedYet ? '' : ''} ${styles['search-field']}`}
          />
          <Button
            type="reset"
            buttonType="flat"
            buttonHeight="large"
            onClick={resetInputFieldHandler}
            className={`${styles['search-button']} ${styles['search-cancel']}`}
          >
            <div className="pl-1 pt-1">
              <CancelSVG className="fill-gray-default hover:fill-black-default" />
            </div>
          </Button>
        </div>
      </div>
    );
  }
);

SearchField.displayName = 'SearchField';

export { SearchField };

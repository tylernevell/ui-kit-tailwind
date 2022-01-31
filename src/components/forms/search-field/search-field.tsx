import { forwardRef, useState } from 'react';
import { Button } from '../../button/button';
import { CancelSVG } from '../../icons/cancel-svg';
import { MagnifyingGlassSVG } from '../../icons/magnifying-glass-svg';
import { Shadow } from '../../shadows/shadow';

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
      <Shadow shadowType="default" inlineFlex={false}>
        <div className="flex w-full h-11 pt-0 rounded border-0 transition-all duration-200 ease-in-out cursor-text">
          <Button
            type="submit"
            buttonType="flat"
            buttonHeight="large"
            className="w-10 flex-none rounded-none active:ring-transparent active:border-transparent focus:ring-transparent focus:border-transparent"
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
            className={`${
              isNotTouchedYet ? '' : ''
            } flex-auto w-full placeholder:text-gray-default border-0 p-1 mt-0 text-base text-black-default bg-transparent focus:outline-transparent border-transparent focus:border-transparent focus:ring-0`}
          />
          <Button
            type="button"
            buttonType="flat"
            buttonHeight="large"
            onClick={resetInputFieldHandler}
            className="w-0 flex-none rounded-none hover:bg-white-default active:bg-white-default active:ring-transparent active:border-transparent focus:ring-transparent focus:border-transparent"
          >
            <div className="pl-1 pt-1">
              <CancelSVG className="fill-gray-default hover:fill-black-default" />
            </div>
          </Button>
        </div>
      </Shadow>
    );
  }
);

SearchField.displayName = 'SearchField';

export { SearchField };

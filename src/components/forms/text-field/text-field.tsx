import React, { forwardRef, useState } from 'react';
import { Shadow } from '../../shadows/shadow';
import { Typography } from '../../typography/typography';

/*
  TODO:
    1. Make input passable to other components and APIs
    2. Add AriaLabels
    3. Style for Success and Autofill (logic needs work)
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
        } grid w-full sm:w-80 h-14 pl-2 pt-0 rounded border-0 transition-all duration-200 ease-in-out cursor-text `}
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
            className={`${
              isNotTouchedYet ? 'h-0' : ''
            } border-0 p-0 mt-0 text-base text-black-default bg-transparent focus:outline-transparent border-transparent focus:border-transparent focus:ring-0`}
          />
        </label>
      </div>
    </Shadow>
  );
});

TextField.displayName = 'TextField';

export { TextField };

// import type { ChangeEvent, FunctionComponent } from 'react';
// import { Typography } from '../../typography/typography';

// type PropsType = {
//   type:
//     | 'button'
//     | 'checkbox'
//     | 'color'
//     | 'date'
//     | 'datetime-local'
//     | 'email'
//     | 'file'
//     | 'hidden'
//     | 'image'
//     | 'month'
//     | 'number'
//     | 'password'
//     | 'radio'
//     | 'range'
//     | 'reset'
//     | 'search'
//     | 'submit'
//     | 'tel'
//     | 'text'
//     | 'time'
//     | 'url'
//     | 'week';
//   placeholder: string;
//   label: string;
//   // eslint-disable-next-line react/require-default-props
//   required?: boolean;
//   // eslint-disable-next-line no-unused-vars
//   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
// };
// const TextField: FunctionComponent<PropsType> = (props) => {
//   const { type, placeholder, label, required = false, onChange } = props;
//   return (
//     <>
//       <div>
//         <label htmlFor={type} className="block">
//           <Typography
//             variant="span"
//             color="text-primary-default"
//             size="text-sm"
//           >
//             {label}
//           </Typography>
//           <div className="mt-1">
//             <input
//               type={type}
//               name={type}
//               className="shadow-sm focus:ring-primary-focus focus:border-primary-focus block w-full sm:text-sm border-tertiary-default font-sans"
//               placeholder={placeholder}
//               required={required}
//               onChange={onChange}
//             />
//           </div>
//         </label>
//       </div>
//     </>
//   );
// };

// export { TextField };

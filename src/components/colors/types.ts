type SelectionTypes = '' | 'on-';
type ColorTypes =
  | 'primary-disabled'
  | 'primary-default'
  | 'primary-hover'
  | 'primary-active'
  | 'white-transparent'
  | 'white-default'
  | 'gray-lightest'
  | 'gray-lighter'
  | 'gray-light'
  | 'gray-default'
  | 'gray-dark'
  | 'black-default'
  | 'red-lighter'
  | 'red-light'
  | 'red-default'
  | 'red-super'
  | 'green-default';

type TailwindBgColors =
  | `bg-${SelectionTypes}${ColorTypes}`
  | 'bg-current'
  | 'bg-transparent'
  | string;

type TailwindTextColors =
  | `text-${SelectionTypes}${ColorTypes}`
  | 'text-current';

export type { TailwindBgColors, TailwindTextColors };

// type PseudoClassTypes = 'default' | 'hover' | 'active' | 'disabled';
// type SelectionTypes = '' | 'on-';
// type ColorTypes = 'primary' | 'white' | 'gray' | 'black' | 'red' | 'green';

// type TailwindBgColors =
//   | `bg-${SelectionTypes}${ColorTypes}-${PseudoClassTypes}`
//   | 'bg-current'
//   | 'bg-transparent'
//   | string;
// type TailwindTextColors =
//   | `text-${SelectionTypes}${ColorTypes}-${PseudoClassTypes}`
//   | 'text-current'
//   | string;

// export type { TailwindBgColors, TailwindTextColors };

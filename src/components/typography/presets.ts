import type { TypographyFieldsType } from './types';

const typographyPresets: { key: string; props: TypographyFieldsType }[] = [
  {
    key: 'heading',
    props: {
      variant: 'h1',
      color: 'text-black-default',
      size: 'text-6xl',
      textAlign: 'text-left',
      fontFamily: 'font-mono',
      className: 'font-black',
    },
  },
  {
    key: 'heading2',
    props: {
      variant: 'h2',
      color: 'text-black-default',
      size: 'text-5xl',
      textAlign: 'text-left',
      fontFamily: 'font-mono',
      className: 'font-bold',
    },
  },
  {
    key: 'heading3',
    props: {
      variant: 'h3',
      color: 'text-black-default',
      size: 'text-4xl',
      textAlign: 'text-left',
      fontFamily: 'font-mono',
      className: 'font-bold',
    },
  },
  {
    key: 'heading4',
    props: {
      variant: 'h4',
      color: 'text-black-default',
      size: 'text-3xl',
      textAlign: 'text-left',
      fontFamily: 'font-mono',
      className: 'font-bold',
    },
  },
  {
    key: 'heading5',
    props: {
      variant: 'h5',
      color: 'text-black-default',
      size: 'text-2xl',
      textAlign: 'text-left',
      fontFamily: 'font-mono',
      className: 'font-bold',
    },
  },
  {
    key: 'heading6',
    props: {
      variant: 'h6',
      color: 'text-black-default',
      size: 'text-xl',
      textAlign: 'text-left',
      fontFamily: 'font-mono',
      className: 'font-bold',
    },
  },
  {
    key: 'paragraph1',
    props: {
      variant: 'p',
      color: 'text-black-default',
      size: 'text-lg',
      textAlign: 'text-left',
      fontFamily: 'font-sans',
      className: '',
    },
  },
  {
    key: 'paragraph2',
    props: {
      variant: 'p',
      color: 'text-black-default',
      size: 'text-base',
      textAlign: 'text-left',
      fontFamily: 'font-sans',
      className: '',
    },
  },
  {
    key: 'paragraph3',
    props: {
      variant: 'p',
      color: 'text-black-default',
      size: 'text-sm',
      textAlign: 'text-left',
      fontFamily: 'font-sans',
      className: '',
    },
  },
];

export { typographyPresets };

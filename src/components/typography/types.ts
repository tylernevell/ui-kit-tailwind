import React from 'react';
import { TailwindTextColors } from '../colors/types';

type TailwindFontFamily = 'font-mono' | 'font-sans';
type TailwindTextAlign = 'text-left' | 'text-right' | 'text-center';
type TailwindTextSizes =
  | 'text-xs'
  | 'text-sm'
  | 'text-base'
  | 'text-lg'
  | 'text-xl'
  | 'text-2xl'
  | 'text-3xl'
  | 'text-4xl'
  | 'text-5xl'
  | 'text-6xl';

type TypographyFieldsType = {
  children?: React.ReactNode;
  variant?: keyof JSX.IntrinsicElements;
  color?: TailwindTextColors;
  size?: TailwindTextSizes;
  textAlign?: TailwindTextAlign;
  fontFamily?: TailwindFontFamily;
  className?: string;
};

interface PropsType extends TypographyFieldsType {
  preset:
    | 'custom'
    | 'heading'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'heading6'
    | 'paragraph1'
    | 'paragraph2'
    | 'paragraph3';
  children?: React.ReactNode;
}

export type {
  TypographyFieldsType,
  TailwindTextSizes,
  TailwindFontFamily,
  TailwindTextAlign,
  PropsType,
};

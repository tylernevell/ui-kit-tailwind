import type { TypographyFieldsType, PropsType } from './types';
import { typographyPresets } from './presets';

export const Typography = (props: PropsType) => {
  const {
    preset = 'custom',
    size,
    variant = 'p',
    children = 'The quick brown fox jumps over the lazy dog.',
    color = 'text-black-default',
    textAlign = 'text-left',
    fontFamily = 'font-sans',
    className,
  } = props;

  const fields: TypographyFieldsType | undefined =
    preset === 'custom'
      ? { size, variant, color, textAlign, fontFamily, className }
      : typographyPresets.find((obj) => obj.key === preset)?.props;

  const Tag = fields?.variant as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={`${fields?.size} ${fields?.color} ${fields?.textAlign} ${fields?.fontFamily} ${fields?.className} ${className}`}
    >
      {children}
    </Tag>
  );
};

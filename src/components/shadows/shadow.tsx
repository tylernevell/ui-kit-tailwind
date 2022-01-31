interface TypographyPropsType {
  children?: React.ReactNode;
  className?: string;
  inlineFlex?: boolean;
  shadowType: 'default' | 'error' | 'success' | 'hover' | 'active';
}

const Shadow = (props: TypographyPropsType) => {
  const { children, shadowType, className, inlineFlex = true } = props;

  let shadowClasses = `flex ${
    inlineFlex ? 'sm:inline-flex' : ''
  } transition-all duration-200 ease-in-out shadow-lg `;

  switch (shadowType) {
    case 'default':
      shadowClasses +=
        'shadow-gray-lighter hover:shadow-gray-light active:shadow-gray-default';
      break;
    case 'error':
      shadowClasses += 'shadow-red-light';
      break;
    case 'success':
      shadowClasses += 'shadow-green-200';
      break;
    case 'hover':
      shadowClasses += 'shadow-gray-light';
      break;
    case 'active':
      shadowClasses += 'shadow-gray-default';
      break;
    default:
      break;
  }

  return <div className={`${shadowClasses} ${className}`}>{children}</div>;
};

export { Shadow };

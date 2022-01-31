import { FunctionComponent, ReactNode } from 'react';
import { useIsVisible } from '../../hooks/use-is-visible/use-is-visible';

type PropsType = {
  children: ReactNode;
};
const FadeInVisible: FunctionComponent<PropsType> = ({ children }) => {
  const [ref, inView] = useIsVisible();
  return (
    <div
      ref={ref}
      className={`transition duration-1000 ease-in-out w-full h-full ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};
export { FadeInVisible };

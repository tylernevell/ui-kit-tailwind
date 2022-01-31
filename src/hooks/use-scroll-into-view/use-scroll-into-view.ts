import React, { useCallback } from 'react';

const useScrollIntoView = (
  ref: React.RefObject<HTMLElement>,
  scrollDelay?: number
) => {
  const scrollIntoView = useCallback(() => {
    let timeout: number = 0;
    const element = ref?.current;

    if (!element) {
      return;
    }

    if (typeof window !== 'undefined' && element) {
      const topOffset = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const isVisible = topOffset >= 0 && topOffset <= windowHeight;

      if (!isVisible) {
        if (scrollDelay) {
          timeout = window.setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, scrollDelay);
        } else {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }

    clearTimeout(timeout);
  }, [ref, scrollDelay]);

  return { scrollIntoView };
};

export { useScrollIntoView };

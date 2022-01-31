import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

const useIntersectionObserver = (
  ref: RefObject<HTMLElement>,
  // eslint-disable-next-line no-undef
  options: IntersectionObserverInit
): IntersectionObserverEntry | null => {
  const [intersectionObserverEntry, setIntersectionObserverEntry] =
    useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === 'function') {
      const handler = (entries: IntersectionObserverEntry[]) => {
        setIntersectionObserverEntry(entries[0]);
      };

      const observer = new IntersectionObserver(handler, options);
      observer.observe(ref.current);

      return () => {
        setIntersectionObserverEntry(null);
        observer.disconnect();
      };
    }
    return () => {};
  }, [ref.current, options.threshold, options.root, options.rootMargin]);

  return intersectionObserverEntry;
};

export { useIntersectionObserver };

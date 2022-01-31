import { useEffect, useRef } from 'react';

const useInterval = (callback: Function, delay?: number | null) => {
  const savedCallback = useRef<Function>(() => {});

  // remember latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // set the interval
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      const interval = setInterval(tick, delay || 0);
      return () => clearInterval(interval);
    }

    return undefined;
  }, [delay]);
};

export { useInterval };

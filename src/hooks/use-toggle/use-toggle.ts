import { useCallback, useState } from 'react';

const useToggle = (
  initState = false,
  nextValue?: boolean
): [boolean, () => void] => {
  const [state, updateState] = useState(initState);

  const toggleState = useCallback(() => {
    updateState((_s) => nextValue || !_s);
  }, [updateState, nextValue]);

  return [state, toggleState];
};

export { useToggle };

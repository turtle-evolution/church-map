import { useRef, useEffect, useCallback } from 'react';

const useReloadWarning = (eventHandler, condition) => {
  const action = useRef(eventHandler);
  action.current = eventHandler;
  const callback = useCallback(
    (...args) => {
      action?.current?.(...args);
    },
    [action]
  );

  useEffect(() => {
    if (condition) window.addEventListener('beforeunload', callback);

    return () => window.removeEventListener('beforeunload', callback);
  }, [condition, callback]);
};

export default useReloadWarning;

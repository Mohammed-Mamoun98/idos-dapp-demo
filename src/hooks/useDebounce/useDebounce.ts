import { useState, useEffect } from 'react';

export const useDebounce = <DepType = any | null>(dependancy: DepType, delay: number = 800) => {
  const [debouncedValue, setDebouncedValue] = useState<DepType>(dependancy);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(dependancy);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [setDebouncedValue, delay, dependancy]);

  return debouncedValue;
};

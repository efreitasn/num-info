import {
  useEffect,
  useState,
  useRef,
  useCallback
} from 'react';

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timeoutId = useRef(null);

  useEffect(
    () => {
      timeoutId.current = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => clearTimeout(timeoutId.current);
    },
    [
      value,
      delay
    ]
  );

  return [debouncedValue, useCallback(
    () => clearTimeout(timeoutId.current),
    [timeoutId.current]
  )];
}
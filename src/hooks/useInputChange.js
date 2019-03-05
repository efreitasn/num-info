import {
  useState,
  useCallback
} from 'react';

export default function useInputChange(initialValue) {
  const [value, setValue] = useState(initialValue);
  const onInputChange = useCallback(
    ({ target }) => setValue(target.value),
    [setValue]
  );

  return [
    value,
    onInputChange
  ];
}
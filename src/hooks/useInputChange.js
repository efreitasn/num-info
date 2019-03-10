import {
  useState,
  useCallback
} from 'react';

export default function useInputChange(initialValue, isValidValueFn) {
  const [value, setValue] = useState(initialValue);
  const onInputChange = useCallback(
    ({ target }) => {
      if (isValidValueFn && isValidValueFn(target.value)) {
        setValue(target.value);
      } else if (!isValidValueFn) {
        setValue(target.value);
      }
    },
    [
      isValidValueFn
    ]
  );

  return [
    value,
    onInputChange,
    setValue
  ];
}
import {
  useState,
  useCallback,
  useEffect
} from 'react';

export default function useWasEnterPressed() {
  const [wasEnterPressed, setWasEnterPressed] = useState(false);
  const onInputKeyPress = useCallback(
    e => {
      if (e.key === 'Enter') {
        setWasEnterPressed(true);
      }
    },
    [setWasEnterPressed]
  );

  useEffect(
    () => {
      setWasEnterPressed(false)
    },
    [wasEnterPressed]
  );

  return [
    wasEnterPressed,
    onInputKeyPress
  ];
};
import React, {
  useEffect,
  useCallback
} from 'react';
import './styles.css';
import { getNumberInfoAllTypes } from '../../api';
// Hooks
import useDebounce from '../../hooks/useDebounce';
import useInputChange from '../../hooks/useInputChange';
import useWasEnterPressed from '../../hooks/useWasEnterPressed';
import useDispatch from '../../hooks/useDispatch';

const isValidInputValue = value => value === '' || value.match(/^[0-9]+$/g);

export default function MainBoxInput() {
  const dispatch = useDispatch();
  const [inputValue, onInputChange] = useInputChange(
    '3',
    isValidInputValue
  );
  const [wasEnterPressed, onInputKeyPress] = useWasEnterPressed();
  const [debouncedValue, stopDebounce] = useDebounce(inputValue, 500);
  const setInfo = useCallback(
    ([
      triviaInfo,
      yearInfo,
      mathInfo
    ]) => {
      dispatch({
        type: 'SET_INFO',
        triviaInfo: triviaInfo.found ? triviaInfo.text : null,
        yearInfo: yearInfo.found ? yearInfo.text : null,
        mathInfo: mathInfo.found ? mathInfo.text : null
      });
    },
    [dispatch]
  );

  useEffect(
    () => {
      if (debouncedValue !== '') {
        dispatch({
          type: 'START_LOADING'
        });
        getNumberInfoAllTypes(debouncedValue)
          .then(setInfo);
      }
    },
    [debouncedValue]
  );

  useEffect(
    () => {
      if (inputValue === '') {
        debugger;
        dispatch({
          type: 'SET_TO_DEFAULT'
        });
      } else if (wasEnterPressed) {
        stopDebounce();

        dispatch({
          type: 'START_LOADING'
        });

        getNumberInfoAllTypes(inputValue)
          .then(setInfo);
      }
    },
    [
      wasEnterPressed,
      dispatch,
      stopDebounce,
      inputValue
    ]
  );

  return (
    <div className="main-box-section">
      <input
        className="main-box-header__input"
        value={inputValue}
        onKeyPress={onInputKeyPress}
        onChange={onInputChange}
      />
    </div>
  );
}
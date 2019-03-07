import React, {
  useCallback
} from 'react';
import './styles.css';
import { getNumberInfoAllTypes } from '../../api';
import MainBoxSection from '../MainBoxSection';
// Hooks
import useInputChange from '../../hooks/useInputChange';
import useDispatch from '../../hooks/useDispatch';

const isValidInputValue = value => value === '' || value.match(/^[0-9]+$/g);

export default function MainBoxInput() {
  const dispatch = useDispatch();
  const [inputValue, onInputChange] = useInputChange('', isValidInputValue)
  const submitValue = useCallback(
    () => {
      if (inputValue !== '') {
        dispatch({
          type: 'START_LOADING'
        });

        getNumberInfoAllTypes(inputValue)
          .then(([
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
          });
      }
    },
    [inputValue]
  );

  return (
    <MainBoxSection>
      <div style={{
        display: 'flex',
        overflow: 'hidden'
      }}>
        <input
          className="main-box-header__input"
          value={inputValue}
          placeholder="Type your number here"
          onChange={onInputChange}
        />
        <button
          className="main-box-header__button"
          onClick={submitValue}
        >Get info</button>
      </div>
    </MainBoxSection>
  );
}
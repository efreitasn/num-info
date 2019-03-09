import React, { useCallback } from 'react';
import { getNumberInfoAllTypes } from '../../../api';
import './styles.css';
// Hooks
import useInputChange from '../../../hooks/useInputChange';
import useDispatch from '../../../hooks/useDispatch';
import MainContentFormInput from './Input';
import MainContentFormButton from './Button';
import MainContentSection from '../Section';

const isValidInputValue = value => value === '' || value.match(/^[0-9]+$/g);

export default function MainContentForm() {
  const [inputValue, onInputChange] = useInputChange('', isValidInputValue)
  const dispatch = useDispatch();
  const submitValue = useCallback(
    async e => {
      e.preventDefault();

      if (inputValue !== '') {
        dispatch({
          type: 'START_LOADING'
        });

        try {
          const [
            triviaInfo,
            yearInfo,
            mathInfo
          ] = await getNumberInfoAllTypes(inputValue);
  
          dispatch({
            type: 'SET_INFO',
            triviaInfo: triviaInfo.found ? triviaInfo.text : null,
            yearInfo: yearInfo.found ? yearInfo.text : null,
            mathInfo: mathInfo.found ? mathInfo.text : null
          });
        } catch(e) {
          dispatch({
            type: 'HAS_ERROR'
          });
        }
      }
    },
    [inputValue]
  );

  return (
    <MainContentSection>
      <form className="main-content-form">
        <MainContentFormInput
          value={inputValue}
          onChange={onInputChange}
        />
        <MainContentFormButton
          onClick={submitValue}
        />
      </form>
    </MainContentSection>
  );
}
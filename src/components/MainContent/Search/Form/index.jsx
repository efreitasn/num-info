import React, {
  useCallback,
  useEffect,
  useRef
} from 'react';
import MainContentFormInput from './Input';
import MainContentFormButton from './Button';
import MainContentSection from '../../Section';
import useInputChange from '../../../../hooks/useInputChange';
import useGetNumberInfo from '../../../../hooks/useGetNumberInfo';
import useSearchState from '../../../../hooks/useSearchState';
import './styles.css';

const isValidInputValue = value => value === '' || value.match(/^[0-9]+$/g);

export default function MainContentSearchForm() {
  const formInputRef = useRef(null);
  const getNumberInfo = useGetNumberInfo();
  const [
    inputValue,
    onInputChange,
    setInputValue
  ] = useInputChange('', isValidInputValue)
  const { currentValue } = useSearchState();
  const submitValue = useCallback(
    async e => {
      e.preventDefault();

      getNumberInfo(inputValue);
    },
    [inputValue]
  );

  useEffect(
    () => setInputValue(currentValue),
    [currentValue]
  );

  useEffect(
    () => formInputRef.current.focus(),
    [formInputRef]
  );

  return (
    <MainContentSection>
      <form
        className="main-content-search-form"
        onSubmit={submitValue}
      >
        <MainContentFormInput
          value={inputValue}
          onChange={onInputChange}
          ref={formInputRef}
        />
        <MainContentFormButton />
      </form>
    </MainContentSection>
  );
}
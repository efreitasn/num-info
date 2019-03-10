import React, {
  useRef,
  useImperativeHandle,
  forwardRef
} from 'react';
import './styles.css';

function MainContentSearchFormInput({
  onChange,
  value
}, ref) {
  const inputEl = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        inputEl.current.focus();
      }
    }),
    [inputEl]
  );

  return (
    <input
      className="main-content-search-form-input"
      value={value}
      placeholder="type a number"
      onChange={onChange}
      ref={inputEl}
    />
  )
}

export default forwardRef(MainContentSearchFormInput);
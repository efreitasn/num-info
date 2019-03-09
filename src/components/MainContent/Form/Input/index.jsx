import React, {
  useRef,
  useEffect
} from 'react';
import './styles.css';

export default function MainContentFormInput({
  onChange,
  value
}) {
  const inputEl = useRef(null);

  useEffect(
    () => {
      if (inputEl.current) {
        inputEl.current.focus();
      }
    },
    [inputEl]
  );

  return (
    <input
      className="main-content-form-input"
      value={value}
      placeholder="type a number"
      onChange={onChange}
      ref={inputEl}
    />
  )
}
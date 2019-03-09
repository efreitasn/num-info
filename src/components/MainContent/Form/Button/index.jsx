import React from 'react';
import './styles.css';

export default function MainContentFormButton({ onClick }) {
  return (
    <button
      className="main-content-form-button"
      onClick={onClick}
    >Get info</button>
  );
}
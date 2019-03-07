import React from 'react';
import './styles.css';

export default function MainBoxSection({ children }) {
  return (
    <div className="main-box-section">
      {children}
    </div>
  );
};
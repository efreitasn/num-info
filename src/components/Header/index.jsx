import React from 'react';
import './styles.css';

export default function Header() {
  return (
    <header>
      <h1 className="main-title">
        <span className="main-title__num">num</span>
        <span className="main-title__in">In</span>
        <span className="main-title__fo">fo</span>
      </h1>
    </header>
  );
};
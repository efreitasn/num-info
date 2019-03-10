import React from 'react';
import './styles.css';

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">
        <span className="header-title__num">num</span>
        <span className="header-title__in">In</span>
        <span className="header-title__fo">fo</span>
      </h1>
    </header>
  );
};
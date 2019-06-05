import React from 'react';
import './styles.css';

export default function Footer() {
  return (
    <footer className="footer">
      <a
        className="footer-link"
        href="https://github.com/efreitasn/num-info"
        target="_blank"
        rel="noopener noreferrer"
      >Github</a>
      <span className="footer-separator">/</span>
      <a
        className="footer-link"
        href="https://efreitasn.dev"
        target="_blank"
        rel="noopener noreferrer"
      >efreitasn</a>
    </footer>
  );
}
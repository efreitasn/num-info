import React from 'react';
import './styles.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <a
          className="footer-link"
          href="https://github.com/efreitasn/num-info"
          target="_blank"
          rel="noopener noreferrer"
        >View on github</a>
      </div>
      <div className="footer-author-info">
        <span className="footer-by">By </span>
        <a
          className="footer-link"
          href="https://efreitasn.dev"
          target="_blank"
          rel="noopener noreferrer"
        >efreitasn</a>
      </div>
    </footer>
  );
}
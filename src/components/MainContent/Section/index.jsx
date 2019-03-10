import React from 'react';
import './styles.css';

export default function MainContentSection({
  noShadow,
  children
}) {
  return (
    <section className={`main-content-section${noShadow ? ' main-content-section--no-shadow' : ''}`}>
      {children}
    </section>
  );
};
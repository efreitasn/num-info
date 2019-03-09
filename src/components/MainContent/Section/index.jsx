import React from 'react';
import './styles.css';

export default function MainContentSection({
  transparent,
  children
}) {
  return (
    <section className={`main-content-section${transparent ? ' main-content-section--transparent' : ''}`}>
      {children}
    </section>
  );
};
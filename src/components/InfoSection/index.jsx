import React from 'react';
import './styles.css';

/*
  type is one of:
    - trivia
    - year
    - math
*/
export default function InfoSection({
  type,
  title,
  description
}) {
  return (
    <div className={`main-box-section info-section info-section--${type}`}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
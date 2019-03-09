import React from 'react';
import MainContentSection from '../Section';
import './styles.css';

const titles = {
  'trivia': 'Trivia',
  'math': 'Math',
  'year': 'Year'
};

/*
  type is one of:
    - trivia
    - year
    - math
*/
export default function MainContentInfoBox({
  type,
  title,
  description
}) {
  return (
    <MainContentSection>
      <div className={`main-content-info-box main-content-info-box--${type}`}>
        <h2>{titles[type]}</h2>
        <p>{description}</p>
      </div>
    </MainContentSection>
  );
}
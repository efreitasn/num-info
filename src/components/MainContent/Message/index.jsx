import React from 'react';
import MainContentSection from '../Section';
import './styles.css';

/*
  type is one of:
    - not-found
    - error
*/
export default function MainContentMessage({
  type
}) {
  switch (type) {
    case 'not-found':
      return (
        <MainContentSection noShadow>
          <p className="main-content-message main-content-message--not-found">
            There's no info related to that number ;(
          </p>
        </MainContentSection>
      );
    case 'error':
      return (
        <MainContentSection noShadow>
          <p className="main-content-message main-content-message--error">
            An error happened while trying to get the info.
          </p>
        </MainContentSection>
      );
    default:
      return null;
  }
}
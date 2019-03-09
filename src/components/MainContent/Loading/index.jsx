import React from 'react';
import SpinnerIcon from '../../SpinnerIcon';
import MainContentSection from '../Section';
import './styles.css';

export default function MainContentLoading() {
  return (
    <MainContentSection transparent>
      <div className="main-content-loading">
        <SpinnerIcon />
      </div>
    </MainContentSection>
  );
}
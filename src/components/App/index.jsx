import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import MainContent from '../MainContent';
import './styles.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
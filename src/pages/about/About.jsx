import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './About.scss';

export default function About() {
  return (
    <div className="about">
      <Header />
      <div>
        <h1>About</h1>
      </div>
      <Footer />
    </div>
  );
}

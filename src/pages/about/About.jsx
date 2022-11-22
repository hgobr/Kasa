import React from 'react';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Tag from '../../components/tag/Tag';
import './About.scss';

export default function About() {
  return (
    <div className="about">
      <Header />
      <div className="container">
        <h1>About</h1>
        <Banner source="about" />
        <Tag name="about-page" />
      </div>
      <Footer />
    </div>
  );
}

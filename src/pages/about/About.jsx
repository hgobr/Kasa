import React from 'react';
import Banner from '../../components/banner/Banner';
import Collapse from '../../components/collapse/Collapse';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './About.scss';
import data from '../../assets/data/about.json';

export default function About() {
  document.title = 'À propos';

  return (
    <div className="about">
      <Header />
      <div className="container">
        <Banner source="about" />
        <div className="aboutContent">
          {data.map((item) => (
            <Collapse
              key={item.id}
              button={item.title}
              type="about"
              text={item.content}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

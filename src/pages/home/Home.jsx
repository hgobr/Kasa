import React from 'react';
import Collapse from '../../components/collapse/Collapse';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Tag from '../../components/tag/Tag';
import './Home.scss';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <h1>Home</h1>
        <Banner source="home" />
        <Tag name="home-page" />
        <Collapse
          button="Équipements"
          line1="Climatisation"
          line2="Wi-Fi"
          line3="Cuisine"
          line4="Espace de travail"
          line5="Fer à repasser"
          line6="Sèche-cheveux"
          line7="Cintres"
        />
      </div>
      <Footer />
    </div>
  );
}

import React from 'react';
import Collapse from '../../components/collapse/Collapse';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Tag from '../../components/tag/Tag';
import './Home.scss';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <h1>Home</h1>
        <Tag name="home-page" />
        <Collapse
          button="Équipements"
          // content="Climatisation
          //          Wi-Fi
          //           Cuisine
          //           Espace de travail
          //           Fer à repasser
          //           Sèche-cheveux
          //           Cintres"
          content={
            'Climatisation \n Wi-Fi\nCuisine\nEspace de travail\nFer à repasser\n Sèche-cheveux\nCintres'
          }
        />
      </div>
      <Footer />
    </div>
  );
}

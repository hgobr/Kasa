import React from 'react';
import Banner from '../../components/banner/Banner';
import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Home.scss';

export default function Home() {
  document.title = 'Kasa';

  return (
    <div className="home">
      <Header />
      <div className="homeContainer">
        <Banner source="home" />
        <div className="cardContainer">
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
}

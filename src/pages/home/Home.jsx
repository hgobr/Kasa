import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Home.scss';

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div>
        <h1>Home</h1>
      </div>
      <Footer />
    </div>
  );
}

import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Slider from '../../components/slider/Slider';
import Collapse from '../../components/collapse/Collapse';
import './Housing.scss';
import Error from '../../pages/error/Error';

import data from '../../assets/data/logements.json';
import Tag from '../../components/tag/Tag';
import Rate from '../../components/rate/Rate';

export default function Housing() {
  const id = window.location.href.split('/').slice(-1)[0];
  const item = data.find((item) => item.id === id);

  if (!item) {
    return <Error />;
  }

  document.title = item.title;

  return (
    <div className="housing">
      <Header />
      <div className="housingContainer">
        <Slider />
        <div className="housingDescription">
          <div className="housingInfo">
            <h1>{item.title}</h1>
            <h4>{item.location}</h4>
            <div className="tagContainer">
              {item.tags.map((tag) => (
                <div key={tag} className="tag">
                  <Tag name={tag} />
                </div>
              ))}
            </div>
          </div>
          <div className="housingHost">
            <div className="hostContainer">
              <p>{item.host.name}</p>
              <img src={item.host.picture} alt="host" />
            </div>
            <div className="hostRate">
              <Rate rate={item.rating} />
            </div>
          </div>
        </div>
        <div className="collapseContainer">
          <Collapse button="Description" type="description" />
          <Collapse button="Equipements" type="equipements" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

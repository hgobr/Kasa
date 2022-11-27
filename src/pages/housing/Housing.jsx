import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Slider from '../../components/slider/Slider';
import Collapse from '../../components/collapse/Collapse';
import './Housing.scss';

import data from '../../assets/data/logements.json';
import Tag from '../../components/tag/Tag';
import Rate from '../../components/rate/Rate';

export default function Housing() {
  const id = window.location.href.split('/').slice(-1)[0];
  const item = data.find((item) => item.id === id);
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
          <Collapse
            button="Description"
            padding="25px"
            line1={item.description}
          />
          <Collapse
            button="Equipements"
            padding="5px 20px"
            line1={item.equipments[0]}
            line2={item.equipments[1]}
            line3={item.equipments[2]}
            line4={item.equipments[3]}
            line5={item.equipments[4]}
            line6={item.equipments[5]}
            line7={item.equipments[6]}
            line8={item.equipments[7]}
            line9={item.equipments[8]}
            line10={item.equipments[9]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

import React, { useState } from 'react';

import './Slider.scss';
import Angle from '../../assets/img/Angle.svg';

import data from '../../assets/data/logements.json';

export default function Slider() {
  const id = window.location.href.split('/').slice(-1)[0];
  const item = data.find((item) => item.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrevious = () => {
    const firstSlide = currentIndex === 0;
    const index = firstSlide ? item.pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const goNext = () => {
    const lastSlide = currentIndex === item.pictures.length - 1;
    const index = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const goSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      {item.pictures.length > 1 && (
        <>
          <div className="arrow leftArrow" onClick={goPrevious}>
            <img src={Angle} alt="arrow" />
          </div>
          <div className="arrow rightArrow" onClick={goNext}>
            <img src={Angle} alt="arrow" />
          </div>
        </>
      )}
      <div
        className="sliderContainer"
        style={{ backgroundImage: `url(${item.pictures[currentIndex]})` }}
      ></div>
      <div className="dotContainer">
        {item.pictures.map((slide, index) => (
          <div key={index} className="dot" onClick={() => goSlide(index)}>
            {currentIndex === index ? '●' : '○'}
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';

import './Banner.scss';
import HomeBanner from '../../assets/img/HomeBanner.png';
import AboutBanner from '../../assets/img/AboutBanner.png';

export default function Banner(props) {
  return (
    <div className="banner">
      <img
        src={props.source === 'home' ? HomeBanner : AboutBanner}
        alt="HomeBanner"
      />
    </div>
  );
}

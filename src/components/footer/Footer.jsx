import React from 'react';
import KasaLogoFooter from '../../assets/img/KasaLogoFooter.svg';
import './Footer.scss';

export default function Footer(props) {
  return (
    <footer className="footer" style={{ position: props.position }}>
      <img src={KasaLogoFooter} alt="KasaLogoFooter" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

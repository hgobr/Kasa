import React from 'react';
import KasaLogoFooter from '../../assets/img/KasaLogoFooter.svg';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <img src={KasaLogoFooter} alt="KasaLogoFooter" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

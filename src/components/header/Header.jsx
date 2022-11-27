import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import KasaLogoHeader from '../../assets/img/KasaLogoHeader.svg';
import './Header.scss';
import '../../styles/style.scss';

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="logoContainer">
        <Link to="/">
          <img src={KasaLogoHeader} alt="KasaLogoHeader" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link
              style={{
                color: '#FF6060',
                textDecoration: 'none',
                borderBottom:
                  location.pathname === '/' ? '3px solid #FF6060' : 'none',
              }}
              to="/"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              style={{
                color: '#FF6060',
                textDecoration: 'none',
                borderBottom:
                  location.pathname === '/about' ? '3px solid #FF6060' : 'none',
              }}
              to="/about"
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

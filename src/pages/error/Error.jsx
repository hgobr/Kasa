import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Error.scss';

export default function Error() {
  document.title = 'Erreur 404';

  return (
    <div className="error">
      <Header />
      <div className="container">
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
        <div className="linkContainer">
          <Link
            style={{
              textDecoration: 'none',
              color: '#FF6060',
              fontWeight: '500',
              borderBottom: '2px solid #FF6060',
            }}
            to="/"
          >
            Retourner sur la page d’accueil
          </Link>
        </div>
      </div>
      <Footer position="absolute" />
    </div>
  );
}

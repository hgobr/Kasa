import React from 'react';
import Banner from '../../components/banner/Banner';
import Collapse from '../../components/collapse/Collapse';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './About.scss';

export default function About() {
  document.title = 'À propos';

  return (
    <div className="about">
      <Header />
      <div className="container">
        <Banner source="about" />
        <div className="aboutContent">
          <Collapse
            button="Fiabilité"
            padding="25px"
            line1="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          />
          <Collapse
            button="Respect"
            padding="25px"
            line1="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Collapse
            button="Service"
            padding="25px"
            line1="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />
          <Collapse
            button="Sécurité"
            padding="25px"
            line1="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
      <Footer position="absolute" />
    </div>
  );
}

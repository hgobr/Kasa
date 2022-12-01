import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../assets/data/logements.json';
import './Card.scss';

export default function Card() {
  return data.map((item) => {
    return (
      <div key={item.id} className="card">
        <div className="container">
          <Link className="link" to={'/housing/' + item.id}>
            <img src={item.cover} alt={item.tags} className="itemImg" />
            <h3>{item.title}</h3>
          </Link>
        </div>
      </div>
    );
  });
}

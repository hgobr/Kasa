import React from 'react';
import './Rate.scss';

export default function Rate(props) {
  const rateNumber = [];

  for (let i = 0; i < props.rate; i++) {
    rateNumber.push(i);
  }

  return (
    <div className="rate">
      <div className="ratePaten">
        <p>★</p>
        <p>★</p>
        <p>★</p>
        <p>★</p>
        <p>★</p>
      </div>
      <div className="rateStar">
        {rateNumber.map((item) => (
          <div className="rate" key={item}>
            <p>★</p>
          </div>
        ))}
      </div>
    </div>
  );
}

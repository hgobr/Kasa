import React from 'react';
import './Rate.scss';

export default function Rate(props) {
  const ratePatern = [1, 2, 3, 4, 5];
  const rateNumber = [];

  for (let i = 0; i < props.rate; i++) {
    rateNumber.push(i);
  }

  return (
    <div className="rate">
      <div className="ratePatern">
        {ratePatern.map((item) => (
          <div key={item}>
            <p>★</p>
          </div>
        ))}
      </div>
      <div className="rateStar">
        {rateNumber.map((item) => (
          <div key={item}>
            <p>★</p>
          </div>
        ))}
      </div>
    </div>
  );
}

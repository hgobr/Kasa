import React from 'react';
import './Tag.scss';

export default function Tag(props) {
  return (
    <div className="tag">
      <p>{props.name}</p>
    </div>
  );
}

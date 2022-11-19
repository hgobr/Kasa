import React from 'react';
import './Collapse.scss';

export default function Collapse(props) {
  const onPress = (e) => {
    e.preventDefault();
    e.target.classList.toggle('active');
    const content = e.target.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  };

  return (
    <div className="collapse">
      <button onClick={onPress}>{props.button}</button>
      <div className="content">
        <p>{props.content}</p>
      </div>
    </div>
  );
}

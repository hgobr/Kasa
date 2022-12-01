import React from 'react';
import './Collapse.scss';
import Angle from '../../assets/img/Angle.svg';
import data from '../../assets/data/logements.json';

export default function Collapse(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const id = window.location.href.split('/').slice(-1)[0];
  const item = data.find((item) => item.id === id);

  const onPress = (e) => {
    setIsOpen(!isOpen);
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
      <div className="buttonContainer">
        <img
          className="icon"
          src={Angle}
          alt="angle"
          style={{
            transition: 'ease-in-out 0.3',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
        <button onClick={onPress}>{props.button}</button>
        <div className="content">
          {props.type === 'equipements' &&
            item.equipments.map((item) => <p key={item}>{item}</p>)}
          {props.type === 'description' && <p>{item.description}</p>}
          {props.type === 'about' && <p>{props.text}</p>}
        </div>
      </div>
    </div>
  );
}

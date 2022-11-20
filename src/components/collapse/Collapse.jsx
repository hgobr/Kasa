import React from 'react';
import './Collapse.scss';
import Angle from '../../assets/img/Angle.svg';

export default function Collapse(props) {
  const [isOpen, setIsOpen] = React.useState(false);

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
          <p>{props.line1}</p>
          <p>{props.line2}</p>
          <p>{props.line3}</p>
          <p>{props.line4}</p>
          <p>{props.line5}</p>
          <p>{props.line6}</p>
          <p>{props.line7}</p>
        </div>
      </div>
    </div>
  );
}

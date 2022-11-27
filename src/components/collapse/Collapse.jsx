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
          {props.line1 && (
            <p style={{ padding: props.padding }}>{props.line1}</p>
          )}
          {props.line2 && (
            <p style={{ padding: props.padding }}>{props.line2}</p>
          )}
          {props.line3 && (
            <p style={{ padding: props.padding }}>{props.line3}</p>
          )}
          {props.line4 && (
            <p style={{ padding: props.padding }}>{props.line4}</p>
          )}
          {props.line5 && (
            <p style={{ padding: props.padding }}>{props.line5}</p>
          )}
          {props.line6 && (
            <p style={{ padding: props.padding }}>{props.line6}</p>
          )}
          {props.line7 && (
            <p style={{ padding: props.padding }}>{props.line7}</p>
          )}
          {props.line8 && (
            <p style={{ padding: props.padding }}>{props.line8}</p>
          )}
          {props.line9 && (
            <p style={{ padding: props.padding }}>{props.line9}</p>
          )}
          {props.line10 && (
            <p style={{ padding: props.padding }}>{props.line10}</p>
          )}
        </div>
      </div>
    </div>
  );
}

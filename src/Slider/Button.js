import React from 'react';

const Button = (props) => {
  return (
      <button title={props.toolTip} className={props.className} onClick={props.goToSlide}>{props.text}</button>
  );
}

export default Button;
import React from 'react';

const Button = ({text,style, handleClick, addNumber}) => {
  return (
    <div>
      <button className={style } onClick={
        (e) => {
            handleClick && handleClick(e)
            addNumber && addNumber()
        }
      }>{text}</button>
    </div>
  );
}

export default Button;

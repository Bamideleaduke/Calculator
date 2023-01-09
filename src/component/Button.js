import React from 'react';

const Button = ({text,style, id, handleClick, addNumber, deleteDisplay, calculate, subtraction,multiplication,division}) => {
  return (
    <div>
      <button className={style } id={id} onClick={
        (e) => {
            handleClick && handleClick(e)
            addNumber && addNumber()
            deleteDisplay && deleteDisplay()
            calculate && calculate()
            subtraction && subtraction()
            multiplication && multiplication()
            division && division()
        }
      }>{text}</button>
    </div>
  );
}

export default Button;

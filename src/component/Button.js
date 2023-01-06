import React from 'react';

const Button = ({text,style, handleClick}) => {
  return (
    <div>
      <button className={style } onClick={
        (e) => {
            handleClick(e)
        }
      }>{text}</button>
    </div>
  );
}

export default Button;

import React from "react";
import Button from "./Button";

export const CalcButton = ({ handleClick,addNumber, deleteDisplay, id, calculate, subtraction, multiplication, division }) => {
    const btnData = [".", 0, "=", 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
   
      <div className="calculator">
        <div className="func-btn">
          <Button style={`btn num-bg`} text={"DEL"} id={"del"} deleteDisplay={deleteDisplay} />
          <Button style={`btn num-bg`} text={"+"} id={"plus"} addNumber={addNumber}  />
          <Button style={`btn num-bg`} id={"mult"} text={"x"} multiplication={multiplication} />
          <Button style={`btn num-bg`} id={"minus"} text={"-"} subtraction={subtraction} />
          <Button style={`btn num-bg`} id={"divide"} text={"÷"} division={division} />
        </div>
        <div className="number-btn">

           {btnData.map((item, idx) => {
        return <Button key={idx} style={`btn num-bg`} text={item} handleClick={item === "=" ? calculate : handleClick} />;
      })}

          {/* <Button style={`btn num-bg`} text={"."} handleClick={handleClick} />
          <Button style={`btn num-bg`} text={"0"} handleClick={handleClick} />
          <Button style={`btn num-bg`} text={"="} />
          <Button style={`btn num-bg`} text={"1"} handleClick={handleClick} />
          <Button style={`btn num-bg`} text={"2"} handleClick={handleClick} />
          <Button style={`btn num-bg`} text={"3"} handleClick={handleClick} />
          <Button style={`btn num-bg`} text={"4"} handleClick={handleClick} />
          <Button style={`btn num-bg`} text={"5"} handleClick={handleClick} />
          <Button style={`btn num-bg`} text={"6"} handleClick={handleClick} />
          <Button style={`btn num-bg`} text={"7"} handleClick={handleClick} />
          <Button style={`btn num-bg`} text={"8"} handleClick={handleClick} />
          <Button style={`btn num-bg`} text={"9"} handleClick={handleClick} /> */}
        </div>
      </div>
    </div>
  );
};

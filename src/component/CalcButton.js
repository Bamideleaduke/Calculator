import React from "react";
import Button from "./Button";

export const CalcButton = ({ handleClick,addNumber }) => {
  //   const btnData = [".", 0, "=", 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      {/* {btnData.map((item) => {
        return <Button style={`btn num-bg`} text={item} />;
      })} */}
      <div className="calculator">
        <div className="func-btn">
          <Button style={`btn num-bg`} text={"DEL"} />
          <Button style={`btn num-bg`} text={"+"} addNumber={addNumber} />
          <Button style={`btn num-bg`} text={"x"} />
          <Button style={`btn num-bg`} text={"-"} />
          <Button style={`btn num-bg`} text={"+"} />
        </div>
        <div className="number-btn">
          <Button style={`btn num-bg`} text={"."} />
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
          <Button style={`btn num-bg`} text={"9"} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

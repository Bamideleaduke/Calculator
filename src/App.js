import { useState } from "react";
import "./App.css";
import { CalcButton } from "./component/CalcButton";
import FormInput from "./component/CalcInput";

function App() {
  const [display, setDisplay] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const addNumber = () => {
    setNum1(parseInt(display));
    setDisplay("");
  };
  const handleClick = (e) => {
    setDisplay((prev) => {
      return prev + e.target.textContent;
    });
    console.log(typeof e.target.textContent);
  };
  const calculate = () => {};

  // show output
  return (
    <div className="App">
      <div className="calcWidth">
        <FormInput display={display} />
        <CalcButton handleClick={handleClick} addNumber={addNumber} />
      </div>
    </div>
  );
}

export default App;

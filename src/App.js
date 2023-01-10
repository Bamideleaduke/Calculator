import { useState } from "react";
import "./App.css";
import { CalcButton } from "./component/CalcButton";
import FormInput from "./component/CalcInput";

function App() {
  const [display, setDisplay] = useState("");
  const [del, setDelete] = useState(false);
  const [operator, setOperator] = useState(null);
  const [numLeft, setNumLeft] = useState("");
  const [numRight, setNumRight] = useState("");

  const deleteDisplay = () => {
    setDelete(!del);
    setDisplay("");
  };

  // Add number
  const addNumber = () => {
    setNumLeft(Number(display));
    setNumRight(Number(display));
    setDisplay(` ${numLeft} + `);
    setOperator("plus");
  };

  const subtraction = () => {
    setNumLeft(Number(display));
    setNumRight(Number(display));
    setDisplay(` ${numLeft} - `);
    setOperator("minus");
  };
  const multiplication = () => {
    setNumLeft(parseInt(display));
    setNumRight(parseInt(display));
    setDisplay(` ${numLeft} x `);
    setOperator("multiply");
  };
  const division = () => {
    setNumLeft(parseInt(display));
    setNumRight(parseInt(display));
    setDisplay(`${numLeft} ÷ `);
    setOperator("divide");
  };
  // set operation

  const handleClick = (e) => {
    console.log(e.target.textContent);
    setDisplay((prev) => {
      return prev + e.target.textContent;
    });
    // console.log(typeof e.target.textContent);
  };
  const calculate = () => {
    setOperator(() => {
      switch (operator) {
        case "plus":
          setDisplay(() => {
            let total = numLeft + numRight;
            return total;
          });
          break;
        case "minus":
          setDisplay(() => {
            let total = numLeft - numRight;
            return total;
          });
          break;
        case "multiply":
          setDisplay(() => {
            let total = numLeft * numRight;
            return total;
          });
          break;
        case "divide":
          setDisplay(() => {
            let total = [...numLeft] / numRight;
            return total;
          });
          break;
        default:
          break;
      }
    });
  };

  // show output
  return (
    <div className="App">
      <div className="calcWidth">
        <FormInput display={display} />
        <CalcButton
          handleClick={handleClick}
          addNumber={addNumber}
          deleteDisplay={deleteDisplay}
          calculate={calculate}
          subtraction={subtraction}
          multiplication={multiplication}
          division={division}
        />
      </div>
    </div>
  );
}

export default App;

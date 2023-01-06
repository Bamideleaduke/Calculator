import { useState } from "react";
import "./App.css";
import { CalcButton } from "./component/CalcButton";
import FormInput from "./component/CalcInput";

function App() {
  const [display, setDisplay] = useState(0);

  const addNumber = () => {};
  const handleClick = (e) => {
    setDisplay((prev) => {

      return 
    });
    console.log(typeof e.target.textContent);
  };

  // show output
  return (
    <div className="App">
      <div className="calcWidth">
        <FormInput display={display} />
        <CalcButton handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;

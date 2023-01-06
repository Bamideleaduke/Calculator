import React, {useState} from "react";

const FormInput = ({ display }) => {
  const [num, setnum] = useState(0)
  
  return (
    <div>
      <div className="form-input">
        <span className="display">{display}</span>
      </div>
    </div>
  );
};

export default FormInput;

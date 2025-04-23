import { useState } from "react";
import InvestInput from "./components/InvestInput";
import InvestResult from "./components/InvestResult";
import "./investCalc.css";

const InvestCalc = () => {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <header>
        <h3>Investment Calculator</h3>
      </header>
      <div className="input-field">
        <InvestInput label={"initial investment"} />
        <InvestInput label={"Annual investment"} />
        <InvestInput label={"Expected return"} />
        <InvestInput
          label={"duration"}
          handleInput={handleInput}
          value={inputValue}
        />
      </div>
      <div>
        <InvestResult duration={inputValue} />
      </div>
    </>
  );
};

export default InvestCalc;

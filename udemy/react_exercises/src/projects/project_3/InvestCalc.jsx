import { useState } from "react";
import InvestInput from "./components/InvestInput";
import Calc_investResult from "./components/Calc_investResult";
import "./investCalc.css";

const InvestCalc = () => {
  const [inputValue, setInputValue] = useState({
    initialInvest: "",
    annualInvest: "",
    expectedReturn: "",
    duration: "",
  });

  const isValidInputs = inputValue.duration >= 1;

  function handleInput(e) {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: +value,
    }));
  }

  return (
    <>
      <header>
        <h3>Investment Calculator</h3>
      </header>
      <div className="main-content">
        <div className="input-field">
          <InvestInput
            label="Initial investment"
            handleInput={handleInput}
            value={inputValue.initialInvest}
            name="initialInvest"
          />
          <InvestInput
            label="Annual investment"
            handleInput={handleInput}
            value={inputValue.annualInvest}
            name="annualInvest"
          />
          <InvestInput
            label="Expected return"
            handleInput={handleInput}
            value={inputValue.expectedReturn}
            name="expectedReturn"
          />
          <InvestInput
            label="Duration (years)"
            handleInput={handleInput}
            value={inputValue.duration}
            name="duration"
          />
        </div>
        <div>
          {isValidInputs && (
            <Calc_investResult
              initialInvestment={inputValue.initialInvest}
              annualInvestment={inputValue.annualInvest}
              expectedReturn={inputValue.expectedReturn}
              duration={inputValue.duration}
            />
          )}
          {!isValidInputs && <p>Please enter valid input values.</p>}
        </div>
      </div>
    </>
  );
};

export default InvestCalc;

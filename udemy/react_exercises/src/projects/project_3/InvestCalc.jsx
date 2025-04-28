// import { useState } from "react";
// import InvestInput from "./components/InvestInput";
// import InvestResult from "./components/InvestResult";
// import "./investCalc.css";
// import Calc_investResult from "./components/Calc_investResult";

// const InvestCalc = () => {
//   const [inputValue, setInputValue] = useState({
//     inititalInvest: "",
//     annualInvest: "",
//     expectedReturn: "",
//     duration: "",
//   });

//   function handleInput(e) {
//     const { name, value } = e.target;
//     setInputValue((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   }

//   return (
//     <>
//       <header>
//         <h3>Investment Calculator</h3>
//       </header>
//       <div className="input-field">
//         <InvestInput
//           label="initial investment"
//           handleInput={handleInput}
//           value={inputValue.inititalInvest}
//           name="inititalInvest"
//         />
//         <InvestInput
//           label="Annual investment"
//           handleInput={handleInput}
//           value={inputValue.annualInvest}
//           name="annualInvest"
//         />
//         <InvestInput
//           label="Expected return"
//           handleInput={handleInput}
//           value={inputValue.expectedReturn}
//           name="expectedReturn"
//         />
//         <InvestInput
//           label="duration"
//           handleInput={handleInput}
//           value={inputValue.duration}
//           name="duration"
//         />
//       </div>
//       <div>
//         <Calc_investResult
//           duration={inputValue.duration}
//           inititalInvest={inputValue.inititalInvest}
//           annualInvest={inputValue.annualInvest}
//           expectedReturn={inputValue.expectedReturn}
//         />
//       </div>
//     </>
//   );
// };

// export default InvestCalc;

// import { useState } from "react";
// import InvestInput from "./components/InvestInput";
// import InvestResult from "./components/InvestResult";
// import "./investCalc.css";
// import Calc_investResult from "./components/Calc_investResult";

// const InvestCalc = () => {
//   const [inputValue, setInputValue] = useState({
//     initialInvest: "", // Corrected spelling here
//     annualInvest: "",
//     expectedReturn: "",
//     duration: "",
//   });

//   function handleInput(e) {
//     const { name, value } = e.target;
//     setInputValue((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   }

//   return (
//     <>
//       <header>
//         <h3>Investment Calculator</h3>
//       </header>
//       <div className="input-field">
//         <InvestInput
//           label="Initial Investment"
//           handleInput={handleInput}
//           value={inputValue.initialInvest}
//           name="initialInvest" // Corrected name
//         />
//         <InvestInput
//           label="Annual Investment"
//           handleInput={handleInput}
//           value={inputValue.annualInvest}
//           name="annualInvest"
//         />
//         <InvestInput
//           label="Expected Return"
//           handleInput={handleInput}
//           value={inputValue.expectedReturn}
//           name="expectedReturn"
//         />
//         <InvestInput
//           label="Duration"
//           handleInput={handleInput}
//           value={inputValue.duration}
//           name="duration"
//         />
//       </div>
//       <div>
//         <Calc_investResult
//           duration={parseFloat(inputValue.duration)} // Ensure duration is a number
//           initialInvest={parseFloat(inputValue.initialInvest)} // Ensure initialInvest is a number
//           annualInvest={parseFloat(inputValue.annualInvest)} // Ensure annualInvest is a number
//           expectedReturn={parseFloat(inputValue.expectedReturn)} // Ensure expectedReturn is a number
//         />
//       </div>
//     </>
//   );
// };

// export default InvestCalc;

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

  function handleInput(e) {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Parse the inputs to ensure they're numbers before passing to Calc_investResult
  const parsedInputs = {
    initialInvest: parseFloat(inputValue.initialInvest),
    annualInvest: parseFloat(inputValue.annualInvest),
    expectedReturn: parseFloat(inputValue.expectedReturn),
    duration: parseInt(inputValue.duration, 10), // Ensure it's an integer
  };

  // Check for invalid inputs before rendering
  // const isValidInputs =
  //   !isNaN(parsedInputs.initialInvest) &&
  //   !isNaN(parsedInputs.annualInvest) &&
  //   !isNaN(parsedInputs.expectedReturn) &&
  //   !isNaN(parsedInputs.duration) &&
  //   parsedInputs.duration > 0;

  return (
    <>
      <header>
        <h3>Investment Calculator</h3>
      </header>
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
        {/* Render Calc_investResult only if inputs are valid */}
        {/* {isValidInputs && ( */}
        <Calc_investResult
          initialInvestment={parsedInputs.initialInvest}
          annualInvestment={parsedInputs.annualInvest}
          expectedReturn={parsedInputs.expectedReturn}
          duration={parsedInputs.duration}
        />
        {/* )} */}
        {/* {!isValidInputs && <p>Please enter valid input values.</p>} */}
      </div>
    </>
  );
};

export default InvestCalc;

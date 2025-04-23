const InvestInput = ({ label, handleInput, value }) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>{" "}
      <input type="number" onChange={handleInput} value={value} />
      {/* <InvestResult duration={inputValue} /> */}
    </>
  );
};

export default InvestInput;

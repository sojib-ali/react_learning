const InvestInput = ({ label, handleInput, value, name }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>{" "}
      <input
        type="number"
        name={name}
        onChange={handleInput}
        value={value}
        id={name}
      />
    </>
  );
};

export default InvestInput;

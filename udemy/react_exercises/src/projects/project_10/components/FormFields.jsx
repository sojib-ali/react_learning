const FormFields = ({
  onDescription,
  onAmount,
  onCategory,
  inputText,
  onSubmit,
}) => {
  return (
    <>
      <form className="form-fields" onSubmit={onSubmit}>
        <div>
          <label>Descriptions</label>
          <input
            type="text"
            onChange={onDescription}
            value={inputText.description}
          />
        </div>

        <div>
          <label>Amount </label>
          <input
            type="number"
            id=""
            onChange={onAmount}
            value={inputText.amount}
          />
        </div>

        <div>
          <label>Category </label>
          <select
            name=""
            id=""
            onChange={onCategory}
            value={inputText.category}
          >
            <option value="grocery">grocery</option>
            <option value="utilities">utilities</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
        <button type="submit" className="form-btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormFields;

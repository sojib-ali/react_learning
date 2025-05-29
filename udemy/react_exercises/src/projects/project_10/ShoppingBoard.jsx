import { useState } from "react";
import FormFields from "./components/FormFields";
import FormTable from "./components/FormTable";
import "./ShoppingBoard.css";

const ShoppingBoard = () => {
  const [inputText, setInputText] = useState({
    description: "",
    amount: "",
    category: "",
  });

  const [submittedItems, setSubmittedItems] = useState([]);

  const [errorMessage, setErrorMessage] = useState(false);

  function handleDescription(e) {
    setInputText((prevInput) => ({
      ...prevInput,
      description: e.target.value,
    }));
  }

  function handleAmount(e) {
    setInputText((prevInput) => ({
      ...prevInput,
      amount: e.target.value,
    }));
  }

  function handleCategory(e) {
    setInputText((prevInput) => ({
      ...prevInput,
      category: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmittedItems((prevItems) => [...prevItems, inputText]);

    setInputText({ description: "", amount: "", category: "" });

    if (
      inputText.description.trim() === "" ||
      inputText.amount.trim() === "" ||
      inputText.category.trim() === ""
    ) {
      setErrorMessage(true);
      return;
    }
  }

  return (
    <>
      <section className="shopping-board">
        <FormFields
          onDescription={handleDescription}
          onAmount={handleAmount}
          onCategory={handleCategory}
          onSubmit={handleSubmit}
          inputText={inputText}
          error1={errorMessage}
        />
        <FormTable listItems={submittedItems} />
      </section>
    </>
  );
};

export default ShoppingBoard;

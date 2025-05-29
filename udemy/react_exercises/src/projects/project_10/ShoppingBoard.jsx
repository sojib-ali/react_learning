import { useState } from "react";
import FormFields from "./components/FormFields";
import FormTable from "./components/FormTable";
import "./ShoppingBoard.css";

const ShoppingBoard = () => {
  const [inputText, setInputText] = useState({
    id: 0,
    description: "",
    amount: "",
    category: "grocery",
  });

  const [submittedItems, setSubmittedItems] = useState([]);

  // const [errorMessage, setErrorMessage] = useState(false);

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

    const newInput = {
      id: inputText.id,
      description: inputText.description,
      amount: inputText.amount,
      category: inputText.category,
    };

    setSubmittedItems((prevItems) => [...prevItems, newInput]);

    setInputText((prevInput) => ({
      ...prevInput,
      id: prevInput.id + 1,
      description: "",
      amount: "",
      category: "grocery",
    }));

    // if (
    //   inputText.description.trim() === "" ||
    //   inputText.amount.trim() === "" ||
    //   inputText.category.trim() === ""
    // ) {
    //   setErrorMessage(true);
    //   return;
    // }
  }

  function handleDelete(rid) {
    setSubmittedItems((prevItems) =>
      prevItems.filter((item) => item.id !== rid)
    );
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
        />
        <FormTable listItems={submittedItems} onDelete={handleDelete} />
      </section>
    </>
  );
};

export default ShoppingBoard;

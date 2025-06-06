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
  const [selectedCategory, setSelectedCategory] = useState("all categories");

  function handleDescription(e) {
    setInputText((prevInput) => ({
      ...prevInput,
      description: e.target.value,
    }));
  }

  function handleAmount(e) {
    setInputText((prevInput) => ({
      ...prevInput,
      amount: Number(e.target.value),
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
  }

  function handleDelete(rid) {
    setSubmittedItems((prevItems) =>
      prevItems.filter((item) => item.id !== rid)
    );
  }

  function handleSelectCategory(e) {
    setSelectedCategory(e.target.value);
  }

  const itemsToDisplay =
    selectedCategory === "all categories" || selectedCategory === ""
      ? submittedItems
      : submittedItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <section className="shopping-board">
        <FormFields
          onDescription={handleDescription}
          onAmount={handleAmount}
          onCategory={handleCategory}
          onSubmit={handleSubmit}
          onSelectCategorty={handleSelectCategory}
          inputText={inputText}
          selectedCategory={selectedCategory}
        />
        <FormTable listItems={itemsToDisplay} onDelete={handleDelete} />
      </section>
    </>
  );
};

export default ShoppingBoard;

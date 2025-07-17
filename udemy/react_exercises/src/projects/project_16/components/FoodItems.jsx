import { useEffect, useState } from "react";
import "../foodOrder.css";

const FoodItems = ({ cartItems, onCartItems }) => {
  const [foodList, setFoodLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadFoodList() {
      try {
        const response = await fetch("http://127.0.0.1:8000/foods");
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        setFoodLists(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadFoodList();
  }, []);

  function handleAddCart(food) {
    onCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find(
        (item) => item.id === food.id
      );

      if (existingCartItem) {
        return prevCartItems.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prevCartItems, { ...food, quantity: 1 }];
    });
  }

  return (
    <>
      {loading && <p>Loading food items...</p>}
      {error && <p>Error: {error} </p>}

      {!loading && !error && (
        <ul className="food-list">
          {foodList.map((food) => (
            <li className="food-items" key={food.id}>
              <img className="food-img" src={food.image} alt={food.name} />
              <h3> {food.name} </h3>
              <p> {food.description} </p>
              <p> {food.price} </p>
              <button onClick={() => handleAddCart(food)} className="food-btn">
                add to cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FoodItems;

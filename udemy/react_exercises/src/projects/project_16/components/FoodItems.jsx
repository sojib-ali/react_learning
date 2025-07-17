import { useEffect, useState } from "react";
import "../foodOrder.css";

const FoodItems = () => {
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
              <button className="food-btn">add to cart</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FoodItems;

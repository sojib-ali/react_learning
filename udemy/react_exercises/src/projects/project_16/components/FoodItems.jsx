import "../foodOrder.css";
import FoodList from "../data/foods.js";

const FoodItems = () => {
  return (
    <>
      <ul className="food-list">
        {FoodList.map((food) => (
          <li className="food-items" key={food.id}>
            <img className="food-img" src={food.image} alt={food.name} />
            <h3> {food.name} </h3>
            <p> {food.description} </p>

            <button className="food-btn">add to cart</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;

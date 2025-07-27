import MealItem from "./MealItem";
import "./../foodieTuts.css";
import useHttp from "../hooks/useHttps";

const requestConfig = {};

const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://192.168.221.221:3000/meals", requestConfig, []);

  console.log(loadedMeals);

  if (isLoading) {
    return <p>Fetching meals..</p>;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;

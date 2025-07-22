import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import "./foodieTuts.css";

const FoodieTuts = () => {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
    </CartContextProvider>
  );
};

export default FoodieTuts;

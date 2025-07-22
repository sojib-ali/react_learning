import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import "./foodieTuts.css";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Cart from "./components/Cart";

const FoodieTuts = () => {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
};

export default FoodieTuts;

import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import "./foodieTuts.css";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const FoodieTuts = () => {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
};

export default FoodieTuts;

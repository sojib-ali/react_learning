import { useState } from "react";
import FoodItems from "./components/FoodItems";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Modal from "./components/Modal";

const FoodOrder = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      {showCart && (
        <Modal shouldShow={showCart} setShouldShow={setShowCart}>
          <Cart />
        </Modal>
      )}
      <Header onShowCart={setShowCart} />
      <FoodItems />
    </>
  );
};

export default FoodOrder;

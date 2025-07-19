import { useEffect, useState } from "react";
import FoodItems from "./components/FoodItems";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import CheckoutForm from "./components/CheckoutForm";

const FoodOrder = () => {
  const [showModal, setShowModal] = useState({
    showCart: false,
    showCheckOut: false,
  });
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCartItems = localStorage.getItem("cart");
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    } catch (error) {
      console.error("could not parse any data", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      {showModal.showCart && (
        <Modal shouldShow={showModal.showCart} setShouldShow={setShowModal}>
          <Cart
            cartItems={cartItems}
            onCheckOut={setShowModal}
            onCartItems={setCartItems}
          />
        </Modal>
      )}
      {showModal.showCheckOut && (
        <Modal shouldShow={showModal.showCheckOut} setShouldShow={setShowModal}>
          <CheckoutForm
            cartItems={cartItems}
            onCartItems={setCartItems}
            onCheckOut={setShowModal}
          />
        </Modal>
      )}
      <Header onShowCart={setShowModal} cartItems={cartItems} />
      <FoodItems cartItems={cartItems} onCartItems={setCartItems} />
    </>
  );
};

export default FoodOrder;

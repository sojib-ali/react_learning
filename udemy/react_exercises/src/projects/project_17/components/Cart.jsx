import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  return (
    <Modal className="cart">
      <h2>Your Cart</h2>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          {item.name} - {item.quantity}
        </li>
      ))}
    </Modal>
  );
};

export default Cart;

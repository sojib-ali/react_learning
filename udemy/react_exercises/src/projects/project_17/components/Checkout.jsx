import { currencyFormatter } from "../util/formatting";
import Modal from "./UI/Modal";

const Checkout = () => {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  return (
    <Modal>
      <form action="">
        <h2>Checkout</h2>
        <p>total amount: {currencyFormatter.format(cartTotal)} </p>
      </form>
    </Modal>
  );
};

export default Checkout;

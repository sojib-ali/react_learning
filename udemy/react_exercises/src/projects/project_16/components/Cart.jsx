const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>No items added in your cart</p>}
      {cartItems.length > 0 && (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <p>
                  {item.name} - {item.quantity} * ${item.price}{" "}
                </p>
              </li>
            ))}
          </ul>

          <p>${totalPrice.toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default Cart;

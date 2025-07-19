const Cart = ({ cartItems, onCheckOut, onCartItems }) => {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  function handleIncreaseQuantity(itemId) {
    onCartItems((prevCartItems) => {
      return prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  }

  function handleDecreaseQuantity(itemId) {
    onCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === itemId);

      // If quantity is 1, remove the item from the cart
      if (existingItem.quantity === 1) {
        return prevCartItems.filter((item) => item.id !== itemId);
      }

      // Otherwise, just decrease the quantity
      return prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>No items added in your cart</p>}
      {cartItems.length > 0 && (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <p>{item.name}</p>
                <div className="cart-item-actions">
                  <button onClick={() => handleIncreaseQuantity(item.id)}>
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleDecreaseQuantity(item.id)}>
                    -
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-fn">
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <button
              onClick={() =>
                onCheckOut((prev) => ({
                  ...prev,
                  showCart: false,
                  showCheckOut: true,
                }))
              }
              className="cart-fn-btn"
            >
              checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

const Header = ({ onShowCart, cartItems }) => {
  function handleCart() {
    onShowCart(true);
  }

  const totalCartItems = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <>
      <div className="header-items">
        <h2>FOODO</h2>
        <button onClick={handleCart} className="header-btn">
          Cart({totalCartItems})
        </button>
      </div>
    </>
  );
};

export default Header;

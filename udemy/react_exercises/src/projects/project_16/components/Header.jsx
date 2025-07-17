import Cart from "./Cart";
const Header = ({ onShowCart }) => {
  function handleCart() {
    onShowCart(true);
  }

  return (
    <>
      <div className="header-items">
        <h2>FOODO</h2>
        <button onClick={handleCart} className="header-btn">
          Cart(2)
        </button>
      </div>
    </>
  );
};

export default Header;

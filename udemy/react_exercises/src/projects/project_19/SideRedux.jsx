import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import "./sideRedux.css";

const SideRedux = () => {
  const showCart = useSelector((state) => state.ui.isCartVisible);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
};

export default SideRedux;

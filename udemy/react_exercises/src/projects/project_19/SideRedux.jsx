import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import "./sideRedux.css";

const SideRedux = () => {
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
};

export default SideRedux;

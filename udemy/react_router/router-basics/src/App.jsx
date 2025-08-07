import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/products", element: <ProductsPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

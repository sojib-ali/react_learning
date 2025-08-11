import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";

import { Children } from "react";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {path: "/", element: <RootLayout />,

    children: [ 
      { path: "/", element: <Homepage /> },
      { path: "/products", element: <ProductsPage /> },
    ]

  }
  

]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

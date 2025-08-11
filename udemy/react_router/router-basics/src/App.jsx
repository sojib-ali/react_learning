import { createBrowserRouter, RouterProvider } from "react-router";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";

import { Children } from "react";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {path: "/", element: <RootLayout />,
    errorElement: <ErrorPage />,

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

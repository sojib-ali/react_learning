import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { N_home } from "./pages/N_home.tsx";
import { ProListPage } from "./n_pages/ProListPage.tsx";
import N_header from "./n_pages/N_header.tsx";
import { ProdPage } from "./n_pages/ProdPage.tsx";
import { N_error } from "./n_pages/N_error.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<N_error />}>
      <Route path="/" element={<N_home />} />
      <Route path="header" element={<N_header />}>
        <Route path="products" element={<ProListPage />} />
        <Route path="products/:id" element={<ProdPage />} />
      </Route>
    </Route>
  )
);
export default function Apps() {
  return (
    <RouterProvider router={router} />

    // <BrowserRouter>
    //   {/* <ErrorBoundary FallbackComponent={N_error}> */}
    //   <Routes>
    //     <Route path="/" element={<N_home />} />
    //     <Route path="header" element={<N_header />} errorElement={<N_error />}>
    //       <Route path="products" element={<ProListPage />} />
    //       <Route path="products/:id" element={<ProdPage />} />
    //     </Route>
    //     {/* <Route path="/header/*" element={<N_error />} /> */}
    //   </Routes>
    //   {/* </ErrorBoundary> */}
    // </BrowserRouter>
  );
}

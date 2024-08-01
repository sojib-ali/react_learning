import { BrowserRouter, Routes, Route } from "react-router-dom";

import { N_home } from "./pages/N_home.tsx";
import { ProListPage } from "./n_pages/ProListPage.tsx";
import N_header from "./n_pages/N_header.tsx";
import { ProdPage } from "./n_pages/ProdPage.tsx";

export default function Apps() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<N_home />} />
        <Route path="/header" element={<N_header />}>
          <Route path="products" element={<ProListPage />} />
          <Route path="products/:id" element={<ProdPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

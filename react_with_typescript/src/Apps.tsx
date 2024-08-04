import { N_home } from "./pages/N_home.tsx";
export default function Apps() {
  return (
    <>
      <N_home />
    </>
  );
}

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route errorElement={<N_error />}>
//       <Route path="/" element={<N_home />} />
//       <Route path="header" element={<N_header />}>
//         <Route path="products" element={<ProListPage />} />
//         <Route path="products/:id" element={<ProdPage />} />
//       </Route>
//     </Route>
//   )
// );
// export default function Apps() {
//   return (
//     <RouterProvider router={router} />
//   );
// }

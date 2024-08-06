import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProListPage } from "./ProListPage.tsx";
import N_header from "./N_header.tsx";
import { ProdPage } from "./ProdPage.tsx";
import { N_error } from "./N_error.tsx";
import { N_home } from "../pages/N_home.tsx";
import Apps from "../Apps.tsx";
import { Suspense } from "react";
import AdminPage from "./Admin_page.tsx";
import { ContactPage, contactPageAction } from "./contactPage.tsx";
import { ThankYouPage } from "./ThankYouPage.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Apps />,
    errorElement: <N_error />,
    children: [
      {
        index: true,
        element: <N_home />,
      },
    ],
  },
  {
    path: "/header",
    element: <N_header />,
    errorElement: <N_error />,
    children: [
      {
        path: "products",
        element: <ProListPage />,
      },
      {
        path: "products/:id",
        element: <ProdPage />,
      },
      {
        path: "admin",
        element: (
          <Suspense
            fallback={
              <div className="text-center p-5 text-xl text-slate-600">
                Loading...
              </div>
            }
          >
            <AdminPage />
          </Suspense>
        ),
      },
      {
        path: "admin",
        element: (
          <Suspense
            fallback={
              <div className="text-center p-5 text-xl text-slate-600">
                Loading...
              </div>
            }
          >
            <AdminPage />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: <ContactPage />,
        action: contactPageAction,
      },
      {
        path: "thank-you/:name",
        element: <ThankYouPage />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}

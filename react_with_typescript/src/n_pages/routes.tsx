import { createBrowserRouter, RouterProvider, defer } from "react-router-dom";
import { getPosts } from "../chapter-9/posts/getPosts.ts";
import { ProListPage } from "./ProListPage.tsx";
import N_header from "./N_header.tsx";
import { ProdPage } from "./ProdPage.tsx";
import { N_error } from "./N_error.tsx";
import { N_home } from "../pages/N_home.tsx";
import Apps from "../Apps.tsx";
import { Suspense } from "react";
import AdminPage from "./Admin_page.tsx";
import { ContactPage } from "./contactPage.tsx";
import { ThankYouPage } from "./ThankYouPage.tsx";
import { Prop_drilling } from "../chapter-8/prop_drilling/Prop_drilling.tsx";
import App_context from "../chapter-8/react_context/App_context.tsx";
import Alert_button from "../chapter-8/sarwar/Alert_button.tsx";
import Redux from "../chapter-8/react_redux/Redux.tsx";
import Blogs from "../chapter-9/Blogs.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
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
        // action: contactPageAction,
      },
      {
        path: "thank-you/:name",
        element: <ThankYouPage />,
      },
    ],
  },
  {
    path: "prop-drilling",
    element: <Prop_drilling />,
  },
  {
    path: "react-context",
    element: <App_context />,
  },
  {
    path: "react-redux",
    element: <Redux />,
  },
  {
    path: "alert-button",
    element: <Alert_button />,
  },
  {
    path: "blog-posts",
    element: <Blogs />,
    loader: async () => defer({ posts: getPosts() }),
  },
]);

export function Routes() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

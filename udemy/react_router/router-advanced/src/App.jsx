import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventDetails, {
  loader as eventDetailsLoader,
} from "./pages/EventDetails";
import RootLayOut from "./pages/RootLayout";
import EventsRoot from "./pages/EventsRoot";
import { loader as evenLoader } from "./pages/EventsPage";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: evenLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailsLoader,
            children: [
              {
                index: true,
                element: <EventDetails />,
              },

              { path: "edit", element: <EditEventPage /> },
            ],
          },

          {
            path: "new",
            element: <NewEventPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

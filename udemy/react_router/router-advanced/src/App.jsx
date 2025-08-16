import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventDetails from "./pages/EventDetails";
import RootLayOut from "./pages/RootLayout";
import EventsRoot from "./pages/EventsRoot";
import { loader as evenLoader } from "./pages/EventsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut />,
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
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId", element: <EventDetails /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

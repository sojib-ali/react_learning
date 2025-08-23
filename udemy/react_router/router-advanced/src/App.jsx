import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventDetails, {
  loader as eventDetailsLoader,
  action as deleteEventAction,
} from "./pages/EventDetails";
import RootLayOut from "./pages/RootLayout";
import EventsRoot from "./pages/EventsRoot";
import { loader as evenLoader } from "./pages/EventsPage";
import Error from "./pages/Error";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage from "./pages/NewsLetterPage";
import { action as newsletterAction } from "./pages/NewsLetterPage";

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
                action: deleteEventAction,
              },

              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },

          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventDetails from "./pages/EventDetails";

const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/events", element: <EventsPage /> },
    { path: "/events/new", element: <NewEventPage />},
    { path: "/events/:eventId", element: <EventDetails /> },
    { path: "/events/:eventId/edit", element: <EditEventPage />}
  ]);

function App() {
  
  return <RouterProvider router = {router} />;
}

export default App;

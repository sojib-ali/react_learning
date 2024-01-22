import "./App.css";
import { Gallery } from "./components/Gallery";
import { Home } from "./pages/Home";
import { TodoList } from "./components/JSX_curlyBraces";
import Profile from "./components/image_card";
import Profiles from "./components/Read_props";
import Gallerys from "./challenges/Gallery";
import PackingList from "./components/conditional";
import List from "./components/rendered_list";
import List_2 from "./challenges/2_rendered_list";
import InitStories from "./challenges/initialStories";
import GetInspired from "./components/GetInspired";
import EventRespond from "./components/Event_respond";
import Toolbar from "./components/event_propagate";
import State_gallery from "./components/state_variable";
import Forms_stuck from "./components/Forms_stuck";
import FeedbackForm from "./components/FeedBack";
import GreetForm from "./components/state_removal";
import StateForm from "./components/State_time";
import TrafficLight from "./components/Traffic_signal";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/JSX with curly braces" element={<TodoList />} />
        <Route path="/passing props" element={<Profile />} />
        <Route path="/read props" element={<Profiles />} />
        <Route path="/challenge 1" element={<Gallerys />} />
        <Route path="/logical AND" element={<PackingList />} />
        <Route path="/rendering list" element={<List />} />
        <Route path="/rendering list_2" element={<List_2 />} />
        <Route path="/story tray" element={<InitStories />} />
        <Route path="/Get Inspired App" element={<GetInspired />} />
        <Route path="/Responding to events" element={<EventRespond />} />
        <Route path="/Event propagation" element={<Toolbar />} />
        <Route path="/State variable" element={<State_gallery />} />
        <Route path="/forms stuck" element={<Forms_stuck />} />
        <Route path="/feedback form" element={<FeedbackForm />} />
        <Route path="/greet form" element={<GreetForm />} />
        <Route path="/state form" element={<StateForm />} />
        <Route path="/traffic light" element={<TrafficLight />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

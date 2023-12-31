import "./App.css";
import { Gallery } from "./components/Gallery";
import { Home } from "./pages/Home";
import { TodoList } from "./components/JSX_curlyBraces";
import Profile from "./components/image_card";
import Profiles from "./components/Read_props";
import Gallerys from "./challenges/Gallery";
import PackingList from "./components/conditional";

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
      </Routes>
    </BrowserRouter>
  );
}
export default App;

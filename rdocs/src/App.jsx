// import "./App.css";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import TaskApp from "../prev/Todos";
import Messenger from "../prev/Rmessenger";
import Co_page from "../prev/Co_page";
import NextGallery from "./topics/AddInteractivity/Lesson_1/NextGallery";
import Input_form from "./topics/AddInteractivity/Lesson_1/Input_form";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task-app" element={<TaskApp />} />
        <Route path="/messenger-with-reducer" element={<Messenger />} />
        <Route path="/context-image-list" element={<Co_page />} />
        <Route path="/next-gallery" element={<NextGallery />} />
        <Route path="/input-form" element={<Input_form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

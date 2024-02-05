// import "./App.css";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import TaskApp from "./components/Todos";
import Messenger from "./components/Rmessenger";
import Co_page from "./components/Co_page";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task-app" element={<TaskApp />} />
        <Route path="/messenger-with-reducer" element={<Messenger />} />
        <Route path="/context-image-list" element={<Co_page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

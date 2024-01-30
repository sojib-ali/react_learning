// import "./App.css";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import TaskApp from "./components/Todos";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task-app" element={<TaskApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import "./App.css";
import { Home } from "./pages/Home.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.tsx";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

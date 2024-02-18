// import "./App.css";
import { Home } from "./pages/Home.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.tsx";
import Alert from "./components/chapter-3/Alert.tsx";
import Use_eff_button from "./components/chapter-4/Use_eff_button.tsx";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react-typescript-component" element={<Alert />} />
        <Route path="/button-with-useEffect" element={<Use_eff_button />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

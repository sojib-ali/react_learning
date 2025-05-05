import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import ContentMenu from "./exercises/ContentMenu";
import MenuDiv from "./exercises/MenuDiv";
import MenuBar from "./projects/project_1/MenuBar";
import TicTacTo from "./projects/project_2/TicTacTo";
import MenuSection from "./projects/project_1/components/tabButtons/MenuSection";
import InvestCalc from "./projects/project_3/InvestCalc";
import GameRef from "./projects/project_4/GameRef.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content-menu" element={<ContentMenu />} />
        <Route path="/menu-div" element={<MenuDiv />} />
        <Route path="/menu-bar" element={<MenuBar />} />
        <Route path="/tic-tac-toe" element={<TicTacTo />} />
        <Route path="/tab-button" element={<MenuSection />} />
        <Route path="/investment-calculator" element={<InvestCalc />} />
        <Route path="/refs-portals" element={<GameRef />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

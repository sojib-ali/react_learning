import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import ContentMenu from "./exercises/ContentMenu";
import MenuDiv from "./exercises/MenuDiv";
import MenuBar from "./projects/project_1/MenuBar";
import TicTacTo from "./projects/project_2/TicTacTo";
import MenuSection from "./projects/project_1/components/tabButtons/MenuSection";
import InvestCalc from "./projects/project_3/InvestCalc";
import GameRef from "./projects/project_4/GameRef.jsx";
import ProjectPlanner from "./projects/project_5/ProjectPlanner.jsx";
import ProjectDashboard from "./projects/project_6/ProjectDashboard.jsx";
import E_shop from "./projects/project_7/E_shop.jsx";
import ImagePicker from "./projects/project_8/ImagePicker.jsx";
import Quiz_app from "./projects/project_9/Quiz_app.jsx";
import ShoppingBoard from "./projects/project_10/ShoppingBoard.jsx";
import QuizApps_tuts from "./projects/project_11/QuizApps_tuts.jsx";
import "./tailwind.css";
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
        <Route path="/project-planner" element={<ProjectPlanner />} />
        <Route path="/project-dashboard" element={<ProjectDashboard />} />
        <Route path="/e-shop" element={<E_shop />} />
        <Route path="/image-picker" element={<ImagePicker />} />
        <Route path="/quiz-tester" element={<Quiz_app />} />
        <Route path="/shopping-board" element={<ShoppingBoard />} />
        <Route path="/quiz-app" element={<QuizApps_tuts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

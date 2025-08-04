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
import PickPlace from "./projects/project_12/PickPlace.jsx";
import FormDemo from "./projects/project_13/FormDemo.jsx";
import FrmAction from "./projects/project_14/FrmAction.jsx";
import OpinionBoard from "./projects/project_15/OpinionBoard.jsx";
import FoodOrder from "./projects/project_16/FoodOrder.jsx";
import FoodieTuts from "./projects/project_17/FoodieTuts.jsx";
import Test_redux from "./projects/project_18/Test_redux.jsx";
import store from "./projects/project_18/store/index.jsx";
import { Provider } from "react-redux";
import SideRedux from "./projects/project_19/SideRedux.jsx";
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
        <Route path="/pick-place" element={<PickPlace />} />
        <Route path="/form-demo" element={<FormDemo />} />
        <Route path="/form-action" element={<FrmAction />} />
        <Route path="/opinion-board" element={<OpinionBoard />} />
        <Route path="/food-order" element={<FoodOrder />} />
        <Route path="/order-food-tuts" element={<FoodieTuts />} />

        <Route
          path="/redux-project"
          element={
            <Provider store={store}>
              <Test_redux />
            </Provider>
          }
        />
        <Route path="redux-sideEffect" element={<SideRedux />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

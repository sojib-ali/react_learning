import { Link } from "react-router";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "0.5rem",
      }}
    >
      <Link to="/content-menu">Content menu app </Link>
      <Link to="/menu-div"> menu div app </Link>
      <Link to="/menu-bar"> menu bar projects </Link>
      <Link to="/tic-tac-toe"> tic-tac-toe</Link>
      <Link to="/tab-button"> Tab button </Link>
      <Link to="/investment-calculator">
        Practice project(1) - Investment Calculator{" "}
      </Link>
      <Link to="/refs-portals"> Game projects - for refs </Link>
      <Link to="/project-planner"> Practice project(2) - Project Planner </Link>
      <Link to="/project-dashboard">
        Practice project(2) - project planner tutorial version
      </Link>
      <Link to="/e-shop">React context and useReducer</Link>
      <Link to="/image-picker">UseEffect - image picker project</Link>
      <Link to="/image-picker">UseEffect - image picker project</Link>
      <Link to="/quiz-tester">Practice project - Quiz</Link>
      <Link to="/shopping-board">practice project - Shopping dashboard</Link>
      <Link to="/quiz-app">practice project - quiz app tutorial version</Link>
      <Link to="/pick-place">database connectoin project - pick place</Link>
      <Link to="/form-demo">form handlings</Link>
      <Link to="/form-action">form action demo</Link>
      <Link to="/opinion-board">
        Handling form submission - opinion board demo project
      </Link>
      <Link to="/food-order">food order demo project</Link>
      <Link to="/order-food-tuts">
        tutorial version - food order demo project
      </Link>
    </div>
  );
};

export default Home;

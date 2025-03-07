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
    </div>
  );
};

export default Home;

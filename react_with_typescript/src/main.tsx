import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import Apps from "./Apps.tsx";
import { Routes } from "./n_pages/routes.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Routes />
    {/* <Apps /> */}
  </>
);

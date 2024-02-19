// import "./App.css";
import { Home } from "./pages/Home.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.tsx";
import Alert from "./components/chapter-3/Alert.tsx";
import Use_eff_button from "./components/chapter-4/Use_eff_button.tsx";
import Person_Score from "./components/chapter-4/Use_eff_fectching_data.tsx";
import Person_Score_2 from "./components/chapter-4/Use_state_data_fetch.tsx";
import Person_Score_3 from "./components/chapter-4/Use_reducer_data_fetch.tsx";
import Person_Score_4 from "./components/chapter-4/Use_ref_data_fetching.tsx";
import Person_Score_5 from "./components/chapter-4/Use_memo_data_fetch.tsx";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react-typescript-component" element={<Alert />} />
        <Route path="/button-with-useEffect" element={<Use_eff_button />} />
        <Route path="/fetching-data-useEffect" element={<Person_Score />} />
        <Route path="/fetching-data-useState" element={<Person_Score_2 />} />
        <Route path="/fetching-data-useReducer" element={<Person_Score_3 />} />
        <Route path="/fetching-data-useRef" element={<Person_Score_4 />} />
        <Route path="/fetching-data-useMemo" element={<Person_Score_5 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

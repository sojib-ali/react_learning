import "./App.css";
import { Home } from "./pages/Home.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.tsx";
// import Old_alert from "./components/chapter-3/Old_Alert.tsx";
import Use_eff_button from "./components/chapter-4/Use_eff_button.tsx";
import Person_Score from "./components/chapter-4/Use_eff_fectching_data.tsx";
import Person_Score_2 from "./components/chapter-4/Use_state_data_fetch.tsx";
import Person_Score_3 from "./components/chapter-4/Use_reducer_data_fetch.tsx";
import Person_Score_4 from "./components/chapter-4/Use_ref_data_fetching.tsx";
import Person_Score_5 from "./components/chapter-4/Use_memo_data_fetch.tsx";
import Person_Score_6 from "./components/chapter-4/Callback_hook.tsx";
import Alert from "./components/chapter-5/Alert.tsx";
import Products_page from "./components/chapter-6/page/Products_page.tsx";
import Product_page from "./components/chapter-6/page/Product_page.tsx";
import Header from "./components/Header.tsx";
import { Error_page } from "./components/chapter-6/page/Error_page.tsx";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/react-typescript-component" element={<Old_alert />} /> */}
        <Route path="/button-with-useEffect" element={<Use_eff_button />} />
        <Route path="/fetching-data-useEffect" element={<Person_Score />} />
        <Route path="/fetching-data-useState" element={<Person_Score_2 />} />
        <Route path="/fetching-data-useReducer" element={<Person_Score_3 />} />
        <Route path="/fetching-data-useRef" element={<Person_Score_4 />} />
        <Route path="/fetching-data-useMemo" element={<Person_Score_5 />} />
        <Route path="/Callback-hook" element={<Person_Score_6 />} />
        <Route path="/alert-plain-css" element={<Alert />} />

        <Route path="/nav-bar" element={<Header />}>
          <Route path="products-list" element={<Products_page />} />
          <Route path="products-list/:id" element={<Product_page />} />
        </Route>
        <Route path="/nav-bar/*" element={<Error_page />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

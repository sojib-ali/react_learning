// import "./App.css";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import TaskApp from "../prev/Todos";
import Messenger from "../prev/Rmessenger";
import Co_page from "../prev/Co_page";
import NextGallery from "./topics/AddInteractivity/Lesson_2/NextGallery";
import Input_form from "./topics/AddInteractivity/Lesson_2/Input_form";
import TextArea_fix from "./topics/AddInteractivity/Lesson_2/TextArea_fix";
import AlertInput from "./topics/AddInteractivity/Lesson_2/AlertInput";
import Clock_3 from "./topics/AddInteractivity/Lesson_3/Time";
import SelectForm from "./topics/AddInteractivity/Lesson_4/SelectForm";
import SignalColor from "./topics/AddInteractivity/Lesson_4/SignalColor";
import RequestTracker from "./topics/AddInteractivity/Lesson_5/RequestTracker";
import MovingDot from "./topics/AddInteractivity/Lesson_6/MovingDot";
import ObejctForm from "./topics/AddInteractivity/Lesson_6/ObejctForm";
import ObjectSpread from "./topics/AddInteractivity/Lesson_6/ObjectSpread";
import ScoreBoard from "./topics/AddInteractivity/Lesson_6/ScoreBoard";
import Canvas from "./topics/AddInteractivity/Lesson_6/Canvas";
import Add_arr from "./topics/AddInteractivity/Lesson_7/Add_arr";
import Remove_arr from "./topics/AddInteractivity/Lesson_7/Remove_arr";
import ShapeEditor from "./topics/AddInteractivity/Lesson_7/ShapeEditor";
import CounterList from "./topics/AddInteractivity/Lesson_7/CounterList";
import Insert_arr from "./topics/AddInteractivity/Lesson_7/Insert_arr";
import ReverseList from "./topics/AddInteractivity/Lesson_7/ReverseList";
import BucketList from "./topics/AddInteractivity/Lesson_7/BucketList";
import ShoppingCart from "./topics/AddInteractivity/Lesson_7/ShoppingCart";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task-app" element={<TaskApp />} />
        <Route path="/messenger-with-reducer" element={<Messenger />} />
        <Route path="/context-image-list" element={<Co_page />} />
        <Route path="/next-gallery" element={<NextGallery />} />
        <Route path="/input-form" element={<Input_form />} />
        <Route path="/textarea-msg" element={<TextArea_fix />} />
        <Route path="/alert-input" element={<AlertInput />} />
        <Route path="/current-time" element={<Clock_3 />} />
        <Route path="/select-form" element={<SelectForm />} />
        <Route path="/signal-color" element={<SignalColor />} />
        <Route path="/request-tracker" element={<RequestTracker />} />
        <Route path="/moving-dot" element={<MovingDot />} />
        <Route path="/object-form" element={<ObejctForm />} />
        <Route path="/object-spread" element={<ObjectSpread />} />
        <Route path="/scoreboard" element={<ScoreBoard />} />
        <Route path="/drag-canvas" element={<Canvas />} />
        <Route path="/add-array" element={<Add_arr />} />
        <Route path="/remove-array" element={<Remove_arr />} />
        <Route path="/shape-editor" element={<ShapeEditor />} />
        <Route path="/counter-list" element={<CounterList />} />
        <Route path="/insert_array" element={<Insert_arr />} />
        <Route path="/reverse-list" element={<ReverseList />} />
        <Route path="/bucket-list" element={<BucketList />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

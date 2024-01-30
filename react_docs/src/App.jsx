import './App.css';
import { Gallery } from './components/Gallery';
import { Home } from './pages/Home';
import { TodoList } from './components/JSX_curlyBraces';
import Profile from './components/image_card';
import Profiles from './components/Read_props';
import Gallerys from './challenges/Gallery';
import PackingList from './components/conditional';
import List from './components/rendered_list';
import List_2 from './challenges/2_rendered_list';
import InitStories from './challenges/initialStories';
import GetInspired from './components/GetInspired';
import EventRespond from './components/Event_respond';
import Toolbar from './components/event_propagate';
import State_gallery from './components/state_variable';
import Forms_stuck from './components/Forms_stuck';
import FeedbackForm from './components/FeedBack';
import GreetForm from './components/state_removal';
import StateForm from './components/State_time';
import TrafficLight from './components/Traffic_signal';
import RequestTracker from './challenges/Request_counter';
import MovingDot from './components/PointerTrack';
import Form_spread from './components/Form_spread';
import Nested_objForm from './components/Nested_obj_form';
import Scoreboard from './components/Update_Score';
import Canvas from './challenges/Draggable';
import NameList from './components/Array_add';
import ShapeEditor from './components/circle_down';
import CounterList from './components/Array_replace';
import InsertList from './components/Array_insert';
import BucketList from './components/Array_upadates';
import ShoppingCart from './components/Cart_increases';
import RemoveCart from './components/Cart_remove';
import TaskApp from './components/Task_List';
import FormConstruct from './components/Form_construct';
import Picture from './challenges/Add_remove_css';
import EditProfile from './challenges/Edit_profile';
import Travel_plan from './components/TravelPlan';
import Packing_List from './components/PackList';
import MailClient from './components/Disappear_selection';
import MultipleSelection from './components/MultipleSelection';
import Accordion from './components/Accordion';
import SyncedInputs from './components/SharedInput';
import FilterableList from './components/Filter_list';
import Nav from './components/Nav';
import Scounter from './components/ Scounter';
import Fancycounter from './components/Fancy_counter';
import ChatMessenger from './components/ChatM';
import TextHide from './components/DisappearingText';
import ReverseOrder from './components/OrderReverse';
import ContactManager from './components/Reset_form';
import NextGallery from './components/NextImage';
import ContactList from './components/ContactList';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/JSX with curly braces" element={<TodoList />} />
        <Route path="/passing props" element={<Profile />} />
        <Route path="/read props" element={<Profiles />} />
        <Route path="/challenge 1" element={<Gallerys />} />
        <Route path="/logical AND" element={<PackingList />} />
        <Route path="/rendering list" element={<List />} />
        <Route path="/rendering list_2" element={<List_2 />} />
        <Route path="/story tray" element={<InitStories />} />
        <Route path="/Get Inspired App" element={<GetInspired />} />
        <Route path="/Responding to events" element={<EventRespond />} />
        <Route path="/Event propagation" element={<Toolbar />} />
        <Route path="/State variable" element={<State_gallery />} />
        <Route path="/forms stuck" element={<Forms_stuck />} />
        <Route path="/feedback form" element={<FeedbackForm />} />
        <Route path="/greet form" element={<GreetForm />} />
        <Route path="/state form" element={<StateForm />} />
        <Route path="/traffic light" element={<TrafficLight />} />
        <Route path="/request counter" element={<RequestTracker />} />
        <Route path="/moving dot" element={<MovingDot />} />
        <Route path="/from spread" element={<Form_spread />} />
        <Route path="/Nested object form" element={<Nested_objForm />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
        <Route path="/drag me" element={<Canvas />} />
        <Route path="/list in array" element={<NameList />} />
        <Route path="/move circles down" element={<ShapeEditor />} />
        <Route path="/array list increment" element={<CounterList />} />
        <Route path="/array list insert" element={<InsertList />} />
        <Route path="/checked or unchecked" element={<BucketList />} />
        <Route path="/cart increase" element={<ShoppingCart />} />
        <Route path="/cart remove" element={<RemoveCart />} />
        <Route path="/todo list" element={<TaskApp />} />
        <Route path="/form construct" element={<FormConstruct />} />
        <Route path="/add or remove css class" element={<Picture />} />
        <Route path="/edit Profile" element={<EditProfile />} />
        <Route path="/travel plan" element={<Travel_plan />} />
        <Route path="/pack list" element={<Packing_List />} />
        <Route path="/disappearing-selection" element={<MailClient />} />
        <Route path="/multiple-selection" element={<MultipleSelection />} />
        <Route path="/drop-content" element={<Accordion />} />
        <Route path="/two-inputs" element={<SyncedInputs />} />
        <Route path="/filter-items" element={<FilterableList />} />
        <Route path="/second-render" element={<Scounter />} />
        <Route path="/fancy-render" element={<Fancycounter />} />
        <Route path="/chat-list" element={<ChatMessenger />} />
        <Route path="/text-hide" element={<TextHide />} />
        <Route path="/reverse-order" element={<ReverseOrder />} />
        <Route path="/edit-contacts" element={<ContactManager />} />
        <Route path="/image-gallery" element={<NextGallery />} /> */}
        <Route path="/Reverse-contact" element={<ContactList />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

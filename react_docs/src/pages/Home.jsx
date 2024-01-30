// import { Gallery } from "../components/Gallery";
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import '../styles/Stories.css';

export function Home() {
  return (
    <div>
      <nav>
        <h1>Describing the UI</h1>
        {/* <h3>Passing Props to a components</h3> */}
        <Link to="/gallery" className="nav-link">
          Gallery
        </Link>
        <Link to="/JSX with curly braces" className="nav-link">
          JavaScript in JSX with curly braces
        </Link>
        <Link to="/passing props" className="nav-link">
          Pasing Props
        </Link>
        <Link to="/read props" className="nav-link">
          Read Props inside the child components
        </Link>
        <Link to="/rendering list" className="nav-link">
          Rendering list
        </Link>
        <Link to="/Get Inspired App" className="nav-link">
          Your UI as a Tree - Get Inspired App
        </Link>
      </nav>

      <nav>
        <h1>Adding Interactivity</h1>

        <Link to="/Responding to events" className="nav-link">
          Responding to events
        </Link>
        <Link to="/Event propagation" className="nav-link">
          Event Propagation
        </Link>
        <Link to="/State variable" className="nav-link">
          Adding a state variable
        </Link>
        <Link to="/state form" className="nav-link">
          state over time
        </Link>
        <Link to="/traffic light" className="nav-link">
          Implement a traffic light
        </Link>
        <Link to="/moving dot" className="nav-link">
          Pointer Track - moving dot
        </Link>
        <Link to="/from spread" className="nav-link">
          Copying objects with the spread syntax
        </Link>
        <Link to="/Nested object form" className="nav-link">
          Nested object form
        </Link>
        <Link to="/list in array" className="nav-link">
          Adding name of list in array
        </Link>
        <Link to="/move circles down" className="nav-link">
          Updating Array in State-Tansforming an array
        </Link>
        <Link to="/array list increment" className="nav-link">
          Updating Array in State-Replacing items in an array
        </Link>
        <Link to="/array list insert" className="nav-link">
          Updating Array in State-Inserting into an array
        </Link>
        <Link to="/checked or unchecked" className="nav-link">
          Updating Array in State-Updating objects inside arrays
        </Link>
      </nav>

      <nav>
        <h1>Managing State</h1>
        <Link to="/form construct" className="nav-link">
          Reacting to input with state-constructing form
        </Link>
        <Link to="/travel plan" className="nav-link">
          Choosing the state Structure - Travel Plan
        </Link>
        <Link to="/pack list" className="nav-link">
          Choosing the state Structure - Packaging list
        </Link>
        <Link to="/drop-content" className="nav-link">
          Sharing state between components - Drop content button
        </Link>
        <Link to="/second-render" className="nav-link">
          Preserving and Resetting State - Render the second counter
        </Link>
        <Link to="/fancy-render" className="nav-link">
          Preserving and Resetting State - Use fancy styling
        </Link>
        <Link to="/chat-list" className="nav-link">
          Preserving and Resetting State - chat box
        </Link>
      </nav>

      <nav>
        <h1>Challenges</h1>
        <Link to="/challenge 1" className="nav-link">
          Challenge 1 of 3:Extract a component{' '}
        </Link>
        <Link to="/logical AND" className="nav-link">
          Conditional rendering
        </Link>
        <Link to="/rendering list_2" className="nav-link">
          Rendering list_2
        </Link>
        <Link to="/story tray" className="nav-link">
          Keeping Components Pure
        </Link>
        <Link to="/forms stuck" className="nav-link">
          Fix stuck form inputs
        </Link>
        <Link to="/feedback form" className="nav-link">
          Fix a crash on feedback form
        </Link>
        <Link to="/greet form" className="nav-link">
          Remove unnecessary state - greet form
        </Link>
        <Link to="/request counter" className="nav-link">
          Fix a request counter
        </Link>
        <Link to="/scoreboard" className="nav-link">
          Fix incorrect state updates
        </Link>
        <Link to="/drag me" className="nav-link">
          Find and fix the mutation-drag me
        </Link>
        <Link to="/cart increase" className="nav-link">
          Update an item in the shoppin cart
        </Link>
        <Link to="/cart remove" className="nav-link">
          Remove an item from the shopping cart
        </Link>
        <Link to="/todo list" className="nav-link">
          Updating to do list
        </Link>
        <Link to="/add or remove css class" className="nav-link">
          Manging State-Lesson: 1-Add or remove CSS class
        </Link>
        <Link to="/edit Profile" className="nav-link">
          Manging State-Lesson: 1-Edit Profile Name
        </Link>
        <Link to="/disappearing-selection" className="nav-link">
          Manging State-Lesson: 2-Fix the disappearing selection
        </Link>
        <Link to="/multiple-selection" className="nav-link">
          Manging State-Lesson: MultipleSelection
        </Link>
        <Link to="/two-inputs" className="nav-link">
          Sharing state between components - two-inputs
        </Link>
        <Link to="/filter-items" className="nav-link">
          Sharing state between components - filter-items
        </Link>
        <Link to="/text-hide" className="nav-link">
          Preserving and Resetting state - Text Hide
        </Link>
        <Link to="/reverse-order" className="nav-link">
          Preserving and Resetting state - Swap two form fields
        </Link>
        <Link to="/edit-contacts" className="nav-link">
          Preserving and Resetting state - Reset a detail form
        </Link>
        <Link to="/image-gallery" className="nav-link">
          Preserving and Resetting state - Clear an image while it's loading
        </Link>
        <Link to="/Reverse-contact" className="nav-link">
          Preserving and Resetting state - Fix misplaced state in the list
        </Link>
      </nav>
    </div>
  );
}

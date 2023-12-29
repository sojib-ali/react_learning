// Importing necessary modules and styles
import './App.css';
import { useState, useEffect } from 'react';

// Creating the main App component
function App() {
  // Using the state hook to manage the 'data' state with an initial value of 'null'
  const [data, setData] = useState(null);

  // Using the useEffect hook to perform asynchronous data fetching when the component mounts
  useEffect(() => {
    // Fetching data from the GitHub API for the user 'moonhighway'
    fetch(`https://api.github.com/users/moonhighway`)
      // Parsing the response as JSON
      .then((response) => response.json())
      // Updating the 'data' state with the fetched data
      .then(setData);
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  // Conditional rendering: if 'data' is not null, display the data in a preformatted text block
  if (data)
    return (
      <pre>{JSON.stringify(data, null, 2)}</pre>
    );
}

// Exporting the App component as the default export
export default App;

import './App.css';
import { useReducer} from 'react';
function App() {
  // const [checked,setChecked]=useState(false);
  const [checked,setChecked]=useReducer((checked)=>!checked,false);
  return (
    <div className="App">
      <input
        type="checkbox" value={checked} onChange={setChecked}/>
        <label>{checked ? "cheked":"not checked"}</label>
    </div>
  ); 
}
export default App;

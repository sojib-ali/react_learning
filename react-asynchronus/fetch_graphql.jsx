//fetching data with graphql
import './App.css';
import {useState, useEffect} from 'react';

const query = `
query{
  allLifts {
    name
    elevationGain
    status
  }
}`;
const opts ={
  method: "POST",
  headers:{"Content-Type":"application/json"},
  body: JSON.stringify({query})
};
//component to display data from the API
function Lift({name, elevationGain, status}){
  return(
    <div>
      <h1>{name}</h1>
      <p>{elevationGain} {status}</p>
    </div>
  )
}
function App() {
  const [data, setData]=useState(null); 
  const [error, setError]=useState(null); //error state declaration
  const [loading, setLoading]=useState(false);//loading state declaration
  useEffect(()=>{
    setLoading(true);
    fetch(
      `https://snowtooth.moonhighway.com/`,opts
    ).then((Response)=>Response.json())
     .then(setData)
     .then(()=> setLoading(false))
     .catch(setError);
  },[]);
  
//tasks given for three types of states
  if(loading) return <h1>Loading...</h1> 
  if(error) return <pre>{JSON.stringify(error)}</pre>
  if(!data) return null;
  return(
    <div>
      {data.data.allLifts.map((lift)=>(
        <Lift 
        name={lift.name}
        elevationGain={lift.elevationGain}
        status={lift.status}
        /> 
      ))}
    </div>
  );
}
export default App;
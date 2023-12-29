//handling three types of states-loading,success and error states

import './App.css';
import {useState, useEffect} from 'react';


//component to display data from the API
function GithubUser({name, location, avatar}){
  return(
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt={name}></img>
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
      `https://api.github.com/users/moonhighway`
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
    <GithubUser 
      name={data.name}
      location={data.location}
      avatar={data.avatar_url}
    />
  );
}
export default App;

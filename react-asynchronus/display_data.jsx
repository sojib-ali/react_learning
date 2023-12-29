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
  useEffect(()=>{
    fetch(
      `https://api.github.com/users/moonhighway`
    ).then((Response)=>Response.json())
     .then(setData);
  },[]);
  if(data)
    return(
      <GithubUser 
        name={data.name}
        location={data.location}
        avatar={data.avatar_url}
      />
    );
}
export default App;

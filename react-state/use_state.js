import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [emotion,setEmotion]=useState("happy");
  // const [prevEmotion,setPrevEmotion]=useState(null);
  const [secondary,setSecondary]=useState("tired");

  useEffect(()=>{
    console.log(`It's ${emotion} right  now`);
  },[emotion]);

  useEffect(()=>{
    console.log(`It's ${secondary} around here`);
  },[secondary]);

  
  // const handleSetEmotion=(newEmotion)=>{
  //   setPrevEmotion(emotion); //store the current emottion;
  //   setEmotion(newEmotion); // passing the button-value;
  // }
  // const handleGoBack=()=>{
  //   if(prevEmotion!==null){
  //     setEmotion(prevEmotion);
  //     setPrevEmotion(null);
  //   }
  // }

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      {/* <button onClick={()=>handleSetEmotion("sad")}>Sad</button> */}
      <button onClick={()=>setEmotion("sad")}>Sad</button>
      <button onClick={()=>setEmotion("happy")}>Happy</button>
      <h2>
        Current secondary emotion is {secondary}.
      </h2>
      <button
        onClick={()=>setSecondary("grateful")}>Grateful</button>

      {/* <button onClick={handleGoBack}>Go back</button> */}
    </div> 
  ); 
}
export default App;

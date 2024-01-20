import {useState, useEffect} from 'react';
import StoryTray from './StoryTray.js';

let initialStories = [
    {id: 0, label: "Ankit's Story"},
    {id: 1, label: "Taylor's Story"},
];

export default function InitStories(){
    let [stories, setStories]=useState([...initialStories])
    let time=useTime();
    if(stories.length > 100){
        stories.length = 100;
    }
    return(
        <div
            style={{
                width: '100%',
                height: '100%',
                textAlign: 'center',
            }}
        >
        <h2>It is {time.toLocaleTimeString()} now.</h2>
        <StoryTray stories={stories} />
        </div>
    );
}
function useTime(){
    const [time,setTime]=useState(()=> new Date());
    useEffect(()=>{
        const id = setInterval(()=>{
            setTime(new Date());
        },1000);
        return ()=>clearInterval(id);
    },[]);
    return time;
}
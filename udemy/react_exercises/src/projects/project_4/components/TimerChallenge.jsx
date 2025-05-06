import { useRef, useState } from "react";
import ResultModal from "./ResultModal";


const TimerChallenge = ({title, targetTime}) => {

  const timer = useRef()
  const dialog = useRef()


  const[timerStarted, setTimerStarted] = useState(false);
  const[timerExpired, setTimerExpired] = useState(false);


  function handleStart(){
    timer.current = setTimeout(()=>{
      setTimerExpired(true)
      dialog.current.open();
    },targetTime * 1000);
    
    setTimerStarted(true);
  }

  function handleStop(){
    // timer === targetTime && clearTimeout(timer);
    clearTimeout(timer.current);
  }  


  return (
    <>
    <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
   {/* {timerExpired && 
   
   <ResultModal shouldShow = {timerExpired} setShouldShow ={setTimerExpired}>
    <h2>You lost</h2>
    <p>The target was <strong>{targetTime}</strong></p>
    <p>You stopped the timer with <strong>X seconds left</strong></p>

  </ResultModal>} */}
      <section className="challange">
          <h2>{title}</h2>
          <p className="challenge-time">{targetTime} second{targetTime > 1 ? 's' : '' }</p>
          <p>
              <button onClick={timerStarted? handleStop : handleStart}>
                {timerStarted ? 'Stop' : 'Start'} Challenge
              </button>
          </p>
          <p className={timerStarted ? 'Active' : undefined}>
            {timerStarted ? 'Time is running...' : 'Timer incative'}
          </p>
      </section>
    </>
  )
}

export default TimerChallenge
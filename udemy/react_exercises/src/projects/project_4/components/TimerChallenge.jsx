import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
import './../styles/game.css';


const TimerChallenge = ({title, targetTime}) => {

  const timer = useRef()
  const dialog = useRef()

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining >=0 && timeRemaining < targetTime * 1000;

  if(timeRemaining <= 0){
    clearInterval(timer.current);
    
    dialog.current.open();
  }

  function handleStart(){
    timer.current = setInterval(()=>{
    setTimeRemaining(prevTimeRemaining => prevTimeRemaining-10);
    },10);
    
  }

  function handleRest(){
    setTimeRemaining(targetTime * 1000);
  }

  function handleStop(){
    clearInterval(timer.current);
    dialog.current.open();
  }  


  return (
    <>
    <ResultModal 
      ref={dialog} 
      targetTime={targetTime} 
      remainingTime ={timeRemaining} 
      onReset = {handleRest}
    />
   {/* {timerExpired && 
   
   <ResultModal shouldShow = {timerExpired} setShouldShow ={setTimerExpired}>
    <h2>You lost</h2>
    <p>The target was <strong>{targetTime}</strong></p>
    <p>You stopped the timer with <strong>X seconds left</strong></p>

  </ResultModal>} */}
      <section className="challenge">
          <h2>{title}</h2>
          <p className="challenge-time">{targetTime} second{targetTime > 1 ? 's' : '' }</p>
          <p>
              <button onClick={timerIsActive ? handleStop : handleStart}>
                {timerIsActive ? 'Stop' : 'Start'} Challenge
              </button>
          </p>
          <p className={timerIsActive ? 'active' : undefined}>
            {timerIsActive ? 'Timer is running...' : 'Timer incative'}
          </p>
      </section>
    </>
  )
}

export default TimerChallenge
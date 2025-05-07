
// const ResultModal = forwardRef(function ResultModal({targetTime, result}, ref) { for older version}
import './../styles/game.css';

import {useRef, useImperativeHandle} from 'react';
import { createPortal } from 'react-dom';

const ResultModal = ({ref, targetTime, remainingTime, onReset}) => {
 
  const dialog = useRef();

 const userLost = remainingTime <=0;
 const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
 const score = Math.round((1 - remainingTime / (targetTime*1000)) * 100)

  useImperativeHandle(ref,()=>{
    return{
      open(){
        dialog.current.showModal();
      }
    }
  })
  return createPortal(
    <dialog ref={dialog} className="result-modal" >
        {userLost && <h2> You lost</h2>}
        {!userLost && <h2>Your Score: {score}</h2> }
        <p>The target was <strong>{targetTime}</strong></p>
        <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>,
    document.getElementById('modal')
  );
}

export default ResultModal



// export const ResultModal = ({ children, shouldShow, setShouldShow }) => {
// //   const [shouldShow, setShouldShow] = useState(false);

//   return (
//     <>
//       {/* <button
//         onClick={() => setShouldShow(true)}
//         className="bg-cyan-500 shadow-lg shadow-cyan-500/50 p-2 text-white rounded-xl"
//       >
//         show modal
//       </button> */}
//       {shouldShow && (
//         // to make hide the modal when clicked on the background
//         <div
//           className="modal-background"
//           onClick={() => setShouldShow(false)}
//         >
//           {/* to stop the bubbling so cliking on this should not be like cliking on the background  */}
//           <div
//             className="modal-body"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {children}
//             <button onClick={() => setShouldShow(false)}>hide</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ResultModal
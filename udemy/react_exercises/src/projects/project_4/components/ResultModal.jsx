
// const ResultModal = forwardRef(function ResultModal({targetTime, result}, ref) { for older version}

import {useRef, useImperativeHandle} from 'react';

const ResultModal = ({ref, targetTime, result}) => {
 const dialog = useRef();

  useImperativeHandle(ref,()=>{
    return{
      open(){
        dialog.current.showModal();
      }
    }
  })
  return (
    <dialog ref={dialog} className="result-modal" >
        <h2> You {result}</h2>
        <p>The target was <strong>{targetTime}</strong></p>
        <p>You stopped the timer with <strong>X seconds left</strong></p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
  )
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
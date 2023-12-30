// import { useReducer } from "react";

// export function Checkbox(){
//     const [checked,setChecked]=useReducer(
//         (checked) => !checked,false
//     );
//     return(
//         <>
//             <label htmlFor="checked">
//                 {checked?"checked":"checked"}
//             </label>
//             <input
//                 id="checked"
//                 type="checkbox"
//                 value={checked}
//                 onChange={setChecked}
//             ></input>
//         </>
//     )
// }
import { useReducer } from "react";

const checkboxReducer = (state) => !state;

export function Checkbox() {
  const [checked, toggleChecked] = useReducer(checkboxReducer, false);

  return (
    <>
      <label htmlFor="checked">{checked ? "checked" : "unchecked"}</label>
      <input
        id="checked"
        type="checkbox"
        checked={checked}
        onChange={toggleChecked}
      />
    </>
  );
}

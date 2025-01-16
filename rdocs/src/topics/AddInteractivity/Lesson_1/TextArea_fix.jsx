import { useState } from "react";

const ChangeField = () =>{
    const[message, setMessage]= useState("");
    const[isSend, setIsSend] = useState(false);

    function handleSend(e){
        e.preventDefault();
        alert(message);
        setIsSend(!isSend);
    }

  return (
    <div>
        {!isSend ? (
        <form>
            <textarea
                placeholder="message"
                onChange={(e)=>setMessage(e.target.value)}
                value={message} 
            >
            </textarea>
            <br />
            <input 
                type="submit" 
                value="Send"
                onClick={handleSend}
            />
        </form>
        ) :(
            <p>Thank you</p>
        )
    }
        {/* {isSend ?  <p>Thank you</p>} */}
         {/* {isSend && <p>Thank you</p>} */}
    </div>
  )
}

const TextArea_fix = () => {
   
  return (
   <div>
        <ChangeField />
   </div>
  )
}

export default TextArea_fix


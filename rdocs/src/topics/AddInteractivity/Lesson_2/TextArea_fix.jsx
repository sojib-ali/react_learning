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
            <h1>Thank you</h1>
        )
    }
    </div>
  )
}

const TextArea_fix = () => {
   
  return (
        <ChangeField />
  )
}

export default TextArea_fix


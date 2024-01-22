import { useState } from "react";
export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");

  function handleMessage(e) {
    setMessage(e.target.value);
  }
  return (
    <>
      {isSent ? (
        <h1>Thank You</h1>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Sending: "${message}"`);
            setIsSent(true);
          }}
        >
          <textarea
            placeholder="Message"
            value={message}
            onChange={handleMessage}
            // onChange={e=>setMessage(e.target.value)}
          />
          <br />
          <button type="submit">Send</button>
        </form>
      )}
    </>
  );
}

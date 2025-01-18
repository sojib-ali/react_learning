
const AlertInput = () => {
    // const [showAlert, setShowAlert] = useState(false);

    function handleAlert(){
        const name = prompt ('What is your name?');
        alert (`Hello, ${name}!`)
    }
  return (
    <div>
        <button onClick={handleAlert}>
            Greet
        </button>
        
    </div>
  )
}

export default AlertInput
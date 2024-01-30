import  {useState} from 'react';
export default function SyncedInputs(){
    const [text, setText] = useState('');

    function handleChange(e){
        setText(e.target.value);
    }

    return(
        <>
            <Sinputs 
                label = "First input"
                value={text}
                onChange={handleChange}
            />
            <Sinputs 
                label = "Second input"
                value={text}
                onChange={handleChange}
            />   
        </>
    );
}

function Sinputs({label, value, onChange}){
   
    return(
        <label>
            {label}
            {' '}
            <input
                value={value}
                onChange={onChange}
            />
        </label>
    );
}
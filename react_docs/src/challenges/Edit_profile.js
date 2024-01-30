import {useState} from 'react';
export default function EditProfile(){
    const [isEditing, setIsEditing]=useState(false);
    const[firstName, setFirstName]=useState('Josephine');
    const[lastName, setLastName]=useState('Langford');
    return(
        <form onSubmit={e=>{
            e.preventDefault();
            setIsEditing(!isEditing);
        }}>
            <label>
                Firs name:{' '}
                {isEditing ? (
                    <input
                        value={firstName}
                        onChange={(e)=>{setFirstName(e.target.value)}}
                    />
                ) : (
                    <b>{firstName}</b>
                )}
            </label>
            <label>
                Last name: {' '}
                {isEditing ?(
                    <input
                        value={lastName}
                        onChange={e=>{setLastName(e.target.value)}}
                    />
                ):(
                    <b>{lastName}</b>
                )}
            </label>
            <button type="submit">
                {isEditing ? 'Save' : 'Edit'}  profile
            </button>
            
            <p><i>Hello, {firstName} {lastName}</i></p>
        </form>
    )
}
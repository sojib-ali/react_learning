import {useState} from 'react';
function ContactList(){
    const[reverse, setReverse]=useState(false);
    const displayedContact = [...contacts];
    if(reverse){
        displayedContact.reverse();
    }
    return(
        <>
            <label>
                <input
                    type="checkbox"
                    checked={reverse}
                    onChange={e=>{
                        setReverse(e.target.checked)}}
                /> {' '}
                Show in reverse order
            </label>
            <ul>
              {displayedContact.map(contact =>
                <li key={contact.id}>
                    <ReverseContact contact={contact} />
                </li>
                )} 
            </ul>
        </>
    )
}
export default ContactList
const contacts = [
    { id: 0, name: 'Alice', email: 'alice@mail.com' },
    { id: 1, name: 'Bob', email: 'bob@mail.com' },
    { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];
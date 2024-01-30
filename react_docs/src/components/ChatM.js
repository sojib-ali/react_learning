import {useState} from 'react';
import ChatBox from "./ChatBox";
import ContactList from "./ContactList";

export default function ChatMessenger(){
    const [to,setTo]=useState(contacts[0]);
    return(
        <div>
        <ContactList
            contacts={contacts}
            selectedContact={to}
            onSelect={contact => setTo(contact)}
        />
        <ChatBox key={to.id} contact={to} />
    </div>
    );  
}

const contacts = [
    {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
    {id: 1, name: 'Alice', email: 'alice@mail.com'},
    {id: 2, name: 'Bob', email: 'Bob@mail.com'}
];
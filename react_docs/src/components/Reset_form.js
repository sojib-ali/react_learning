import CList from "./CList";
import EContact from "./EContact";
import { useState } from "react";

export default function ContactManager(){
    const [contacts, setContacts] = useState(initialContacts);
    const [selectedId, setSelectedId]= useState(0);

    const selectedContact  = contacts.find(c=>
        c.id === selectedId
    );
    function handleSave(updatedData){
        const nextContacts = contacts.map(c =>{
            if(c.id === updatedData.id){
                return updatedData;
            }else{
                return c;
            }
        });
        setContacts(nextContacts);
    }
    return(
        <div>
            <CList
                contacts={contacts}
                selectedId={selectedId}
                onSelect={id => setSelectedId(id)}
            />
            <hr />
            <EContact
                key={selectedId}
                initialData={selectedContact}
                onSave={handleSave}
            />
        </div>
        
    )
}
const initialContacts=[
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
]
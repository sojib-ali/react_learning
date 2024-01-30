export default function ContactList({
    selectedContact,
    contacts,
    onSelect
}){
    return(
        <ul>
            {contacts.map(contact =>
                <li key={contact.id}>
                    <button onClick={() =>{
                        onSelect(contact);
                    }}>
                        {contact.name}
                    </button>
                </li>
                )}
        </ul>
    );
}
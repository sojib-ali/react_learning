export default function ContactList({ contacts, dispatch, selectedId }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <button
            onClick={() => {
              dispatch({
                type: "changed_selection",
                contactId: contact.id,
              });
            }}
          >
            {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

import ContactList from "./ContactList";
import { mreducer } from "./Mreducer";
import Chat from "./Rchat";
import { useReducer } from "react";

const initialState = {
  selectedId: 0,
  messages: {
    0: "Hello, Taylor",
    1: "Hello, Alice",
    2: "Hello, Bob",
  },
};

export default function Messenger() {
  const [state, dispatch] = useReducer(mreducer, initialState);
  const message = state.messages[state.selectedId];
  const contact = contacts.find((c) => c.id === state.selectedId);

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />

      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

const contacts = [
  { id: 0, name: "Taylor", email: "talor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

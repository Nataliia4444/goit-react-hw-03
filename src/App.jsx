//* IMPORT USESTATE
import { useState } from "react";
import { useEffect } from "react";

//* IMPORT STYLES
import "./App.css";

//* IMPORT LIBRARY FOR ID
import { nanoid } from "nanoid";

//* IMPORT COMPONENTS
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

//* DEFAULT CONTACTS
const usersInfo = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  //* USESTATE AND PARSED CONTACTS FROM LOCALE STORAGE
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contacts");
    if (!stringifiedContacts) return usersInfo;

    const parsedContacts = JSON.parse(stringifiedContacts);
    return parsedContacts;
  });

  //*FILTERED CONTACTS
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  //* WRITE IN LOCALE STORAGE
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  //* DELETE CONTACT
  function handleDelete(id) {
    setContacts((prev) => prev.filter((contacts) => contacts.id !== id));
    setFilteredContacts((prev) =>
      prev.filter((contacts) => contacts.id !== id)
    );
  }

  //* SEARCH FOR NAME
  function handleOnChange(e) {
    const findName = e.target.value.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(findName)
    );
    setFilteredContacts(filteredContacts);
  }

  //* ADD NEW CONTACT
  function addNewContact(values) {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.number,
    };
    setContacts((contacts) => [...contacts, newContact]);
    setFilteredContacts((contacts) => [...contacts, newContact]);
  }

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm addNewContact={addNewContact} />
      <SearchBox handleOnChange={handleOnChange} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
}

export default App;

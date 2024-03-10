//* IMPOT COMPONENT CONTACT
import Contact from "../Contact/Contact";

//* IMPORT STYLES
import css from "./ContactList.module.css";

export default function ContactList({ contacts, handleDelete }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact
              name={name}
              number={number}
              id={id}
              handleDelete={handleDelete}
            />
          </li>
        );
      })}
    </ul>
  );
}

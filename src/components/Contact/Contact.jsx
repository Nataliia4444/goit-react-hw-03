//* IMPORT ICON
import { BsTelephone } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";

//* IMPORT STYLES
import css from "./Contact.module.css";

//* CONTACT CARD
export default function Contact({ name, number, id, handleDelete }) {
  return (
    <div className={css.contactCard}>
      <div className={css.contactInfoWrapper}>
        <p className={css.contactInfo}>
          <span className={css.contactIcon}>
            <IoMdContact />
          </span>
          {name}
        </p>
        <p className={css.contactInfo}>
          <span className={css.contactIcon}>
            <BsTelephone />
          </span>
          {number}
        </p>
      </div>
      <button
        type="button"
        className={css.btnDelete}
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}

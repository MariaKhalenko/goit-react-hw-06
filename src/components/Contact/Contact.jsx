import css from "./Contact.module.css";
import { FaUserLarge, FaPhone, FaTrashCan } from "react-icons/fa6";

const Contact = ({ contact, onDelete }) => {
  return (
    <li className={css.contactCart}>
      <div className={css.contactInfo}>
        <p className={css.userName}>
          <FaUserLarge />
          {contact.name}
        </p>
        <p className={css.userNumber}>
          <FaPhone />
          {contact.number}
        </p>
      </div>

      <button className={css.btnDel} onClick={() => onDelete(contact.id)}>
        Delete <FaTrashCan className={css.iconDel} />
      </button>
    </li>
  );
};

export default Contact;

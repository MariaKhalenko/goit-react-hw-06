import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contactsData = useSelector(selectContacts);
  const search = useSelector(selectNameFilter);

  const filterContacts =
    contactsData && contactsData.items
      ? contactsData.items.filter((contact) =>
          contact.name.toLowerCase().includes(search.trim().toLowerCase())
        )
      : [];

  return (
    <div>
      {filterContacts.length === 0 ? (
        <p className={css.text}>No contacts yet</p>
      ) : (
        <ul className={css.contactList}>
          {filterContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;

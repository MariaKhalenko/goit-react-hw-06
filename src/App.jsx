import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { FcContacts } from "react-icons/fc";
import "./App.css";

const App = () => {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem("contacts")) || contactsData
  // );
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const handleDeleteContact = (id) => {
  //   setContacts(contacts.filter((contact) => contact.id !== id));
  // };

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div className="container">
      <h1 className="title">
        Phonebook <FcContacts className="iconTitle" />
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {/* {contacts.length === 0 && <p className="text">No contacts yet</p>} */}
    </div>
  );
};

export default App;

import styles from "./App.module.css";
import ContactDisplay from "./components/ContactDisplay";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState(null);

  async function fetchContacts() {
    const response = await fetch("http://localhost:3000/api/contacts"); //backend must be running to use this. ( npm run dev on terminal )
    const newContacts = await response.json();
    setContacts(newContacts);
  }

  useEffect(() => {
    fetchContacts();
  }, []);

  function handleContactClicked(c) {
    setContact(c);
  }

  return (
    <>
      <div className={styles.container}>
        <Sidebar contacts={contacts} onContactClicked={handleContactClicked} />

        {/* <h1>Hello, WDCC! 🐮💻</h1> */}

        {contact != null ? <ContactDisplay contact={contact} /> : undefined}
      </div>
    </>
  );
}
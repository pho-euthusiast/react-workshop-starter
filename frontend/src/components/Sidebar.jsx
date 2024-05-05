import { useState } from "react";
import ContactCard from "./ContactCard";
import styles from "./Sidebar.module.css";

export default function Sidebar({ contacts, onContactClicked}) {

    const [search, setSearch] = useState(""); 

    function handleChange(e) { 
        setSearch(e.target.value); 
    }

    function searchfilter(contact){ 
        const searchLower = search.toLowerCase(); 
        const nameLower = contact.name.toLowerCase(); 
        return nameLower.includes(searchLower); 
    }

  return (
    <nav className={styles.sidebar}>
      <div className={styles.corner}>
        <h2>Friends</h2>
        <input className={styles.searchBar} type="text"  value ={search} onChange = {handleChange}/>
      </div>
      <div className={styles.contactList}>
        {contacts.filter(searchfilter).map((contact) => (
          <ContactCard key = {contact._id} contact={contact} 
          onContactClicked={onContactClicked}/>
        ))}
      </div>
    </nav>
  );
}
import styles from "./ContactDisplay.module.css"; 

export default function ContactDisplay(props) { 
    const contact = props.contact; 
    // const { contact } = props; // for java script if variable has same name 

    return (
       <main className = {styles.container}> 
        <img src = {contact.photoUrl} alt = {contact.name}></img>
        <h1> {contact.name} </h1>
        <h3> {contact.phoneNumber} </h3>
        <p> {contact.funFact} </p>
       </main> 
    ); 
}
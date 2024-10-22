import React, {  useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import './style.css';

const App = () => {
  const [currentContact, setCurrentContact] = useState(null);

  return (
    <div>
      <h1>Список ваших контактов</h1>
      <ContactForm currentContact={currentContact} setCurrentContact={setCurrentContact} />
      <ContactList setCurrentContact={setCurrentContact}/>
    </div>
  );
};

export default App;


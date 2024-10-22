import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from './redux/index';

const ContactList = ({ setCurrentContact, currentContact }) => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.phone}
          <button onClick={() => setCurrentContact(contact)}>Редактировать</button>
          <button  onClick={() => dispatch(deleteContact(contact.id))}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

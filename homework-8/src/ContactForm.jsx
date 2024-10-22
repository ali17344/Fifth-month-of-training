import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from './redux/index';

const ContactForm = ({ currentContact, setCurrentContact }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(currentContact ? currentContact.name : '');
  const [phone, setPhone] = useState(currentContact ? currentContact.phone : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentContact) {
      dispatch(editContact({ id: currentContact.id, name, phone }));
    } else {
      dispatch(addContact({ id: Date.now(), name, phone }));
    }
    setName('');
    setPhone('');
    setCurrentContact(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Номер телефона"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">{currentContact ? 'Сохранить' : 'Добавить'}</button>
    </form>
  );
};

export default ContactForm;

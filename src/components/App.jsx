import { useState, useEffect } from 'react';
import ContactForma from './ContactForma/ContactForma';
import ContactList from './ContactList/ContactList';
import s from './App.module.css';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getAllContacts } from 'redux/store';

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', defaulContacts);
  const allContacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

  const submitBtn = (name, number) => {
    const normalizedName = name.toLowerCase();

    const checkedForName = allContacts.find(
      contact => normalizedName === contact.name.toLocaleLowerCase()
    );

    if (checkedForName) {
      return alert(`${name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (!name || !number) {
      alert('Invalid name or number value!');
      return;
    }
    dispatch(addContact(newContact));

    // setContacts([...contacts, newContact]);
  };

  return (
    <div className={s.section}>
      <p className={s.title}>Phonebook</p>
      <ContactForma submitBtn={submitBtn} />

      <p className={s.title}>Contacts</p>
      <Filter />
      <ContactList />
    </div>
  );
}

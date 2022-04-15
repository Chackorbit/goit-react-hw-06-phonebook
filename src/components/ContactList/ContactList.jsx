import s from './ContactList.module.css';
import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from 'redux/contactsSlice';
import { getAllContacts } from 'redux/store';

const ContactList = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(getAllContacts);

  return (
    <div className={s.container}>
      <ul className={s.ul}>
        {allContacts.length < 1 ? (
          <p>We dont have contacts</p>
        ) : (
          allContacts.map(el => (
            <ContactItem
              key={nanoid()}
              name={el.name}
              number={el.number}
              id={el.id}
              deleteContact={() => dispatch(remove(el.id))}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default ContactList;

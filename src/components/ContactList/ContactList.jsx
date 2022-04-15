import s from './ContactList.module.css';
import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from 'redux/Actions';
import { getContact, getFilter, getAllContacts } from 'redux/store';

const ContactList = () => {
  const dispatch = useDispatch();

  const contactsList = useSelector(state => state.items);
  const fil = useSelector(state => state.filter);

  // export const getContact = state => state.contacts.contacts;
  // export const getFilter = state => state.contacts.filter;

  // export const getAllContacts = state => {
  //   const contacts = getContact(state);
  //   const filter = getFilter(state);

  //   const normalizeFilter = filter.toLocaleLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizeFilter)
  //   );
  // };

  // console.log(contactsList);
  return (
    <div className={s.container}>
      <ul className={s.ul}>
        {contactsList.length < 1 ? (
          <p>We dont have contacts</p>
        ) : (
          contactsList.map(el => (
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

// Statistics.propTypes = {
//   good: propTypes.number,
//   neutral: propTypes.number,
//   bad: propTypes.number,
// };

import { createReducer } from '@reduxjs/toolkit';
import { addContact, remove, filter } from './Actions';

const defaulContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'dima', number: '227-915-26' },
];

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

export const reducerForItems = createReducer(defaulContacts, {
  [addContact]: (state, action) => [...state, action.payload],
  [remove]: (state, action) => state.filter(el => el.id !== action.payload),
});

export const reducerForFilter = createReducer('', {
  [filter]: (state, action) => action.payload,
  //   [filter]: (state, action) =>
  //     state.filter(
  //       elem =>
  //         elem.name.slice(0, state.length).toLowerCase() ===
  //         action.payload.toLowerCase()
  //     ),
});

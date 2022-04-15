import { configureStore } from '@reduxjs/toolkit';
import { reducerForItems, reducerForFilter } from './Reducer';

// export const getContact = state => state.items;
// export const getFilter = state => state.filter;
// console.log(getContact());
// console.log(getFilter());

// export const getAllContacts = state => {
//   const contacts = getContact(state);
//   const filter = getFilter(state);

//   const normalizeFilter = filter.toLocaleLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizeFilter)
//   );
// };

export const store = configureStore({
  reducer: {
    items: reducerForItems,
    filter: reducerForFilter,
  },
});

import { configureStore } from '@reduxjs/toolkit';
// import { reducerForItems, reducerForFilter } from './Reducer';
import { contactSlice, filterSlice } from './contactsSlice';

export const getContacts = state => state.items;
export const getFilter = state => state.filter;

export const getAllContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  const normalizeFilter = filter.toLocaleLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
};

export const store = configureStore({
  reducer: {
    items: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
});

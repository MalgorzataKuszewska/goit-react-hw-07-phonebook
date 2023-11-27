import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from 'redux/ContactsSlice';
import filterReducer from 'redux/FilterSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;

import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const contactsInitialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      const updatedPhoneBook = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      state.contacts = updatedPhoneBook;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

// Генераторы экшенов
export const { addContact, deleteContact } = contactsSlice.actions;

// Selectors
export const getContacts = state => state.contacts.contacts;

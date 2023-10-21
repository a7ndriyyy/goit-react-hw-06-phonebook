import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(el => el.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { addContact, removeContact, setFilter } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};
export const persistedReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

// export const getContacts = state => state.contacts.items;

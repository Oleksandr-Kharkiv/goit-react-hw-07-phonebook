import { createSlice, nanoid } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [{id:"12", name: "Igor", number: "2364576324"}],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// Selectors
export const getContacts = state => state.contacts;
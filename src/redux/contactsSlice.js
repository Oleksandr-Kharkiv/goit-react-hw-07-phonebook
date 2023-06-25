import { createSlice } from '@reduxjs/toolkit';
import {fetchContacts, addContact, deleteContact} from '../redux/operations'

/*--------------- тестовий початоковий стан глобального state -------------------*/

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;






/*----------------------------------hw-06---------контакти зберігаються у глобальному стайті та local storage--------*/

// import { createSlice, nanoid } from '@reduxjs/toolkit';

// /*-------------------------------------------------- тестовий початоковий стан глобального state -------------------*/
// // const initialState = [
// //   {"id":"12", "name": "Igor", "number": "1212121212"},
// //   {"id":"13", "name": "Ira", "number": "1111111111"},
// //   {"id":"14", "name": "Vera", "number": "3333333333"},
// // ]
// const initialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// }

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.unshift(action.payload);
//       },
//       prepare(name, number) {
//         return {
//           payload: {
//             id: nanoid(),
//             name,
//             number,
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       return state.filter(contact => contact.id !== action.payload);
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;

// // Selectors
// export const getContacts = state => state.contacts;

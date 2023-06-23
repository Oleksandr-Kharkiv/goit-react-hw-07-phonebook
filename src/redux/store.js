import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
} from 'redux-persist';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});

export const persistor = persistStore(store);

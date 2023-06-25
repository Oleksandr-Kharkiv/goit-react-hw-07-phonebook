import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   });
  // },
});



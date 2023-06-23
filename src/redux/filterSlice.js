import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: "",
    reducers: {
      setNewFilter(state, action) {
        state = action.payload;
        return state
      },
    },
  }
);
export const { setNewFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// Selectors
export const getFilter = state => state.filter;
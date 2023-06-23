import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64931410428c3d2035d14bdb.mockapi.io";

// export const fetchContacts = async () => {
//   try {
//     const response = await axios.get('/contacts');
//     console.log(response.data);
//     return response.data 
//   } catch (error) {
//     console.error(error);
//   }
// }

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/contacts");
        console.log(`це з fetchContacts:`);
        console.log(response.data);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const addContact = createAsyncThunk(
    "contacts/addContacts",
    async (text, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", { text });
        console.log(`це з addContact`);
        console.log(response.data);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    "contacts/deleteContacts",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        console.log(`це з deleteContact`);
        console.log(response.data);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
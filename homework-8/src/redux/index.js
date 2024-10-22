import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
    editContact: (state, action) => {
      const { id, name, phone } = action.payload;
      const contact = state.find((contact) => contact.id === id);
      if (contact) {
        contact.name = name;
        contact.phone = phone;
      }
    },
  },
});

export const { addContact, deleteContact, editContact } = contactSlice.actions;
export default contactSlice.reducer;

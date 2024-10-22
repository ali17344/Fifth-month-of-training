import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '.';
const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;

import { createSlice, nanoid } from "@reduxjs/toolkit";
import contactsData from "../components/Contact/contacts.json";

const initialContacts = {
  items: contactsData,
};

const initialState = {
  items: initialContacts,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        console.log("action.payload:", action.payload); // Выводим данные, переданные в редуктор
        console.log("state.items:", state.items); //
        if (state.items) {
          state.items.push(action.payload);
        } else {
          console.error("state.items is not an array!"); // Выводим ошибку, если state.items не является массивом
        }
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;

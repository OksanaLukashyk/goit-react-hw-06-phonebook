// Додаємо логіку для збереження контактів в локальне сховище, тільки за допомогою redux-persist.
// Значення фільтра в локальне сховище зберігати не потрібно. redux повинен бути чистим, ніяких перевірок на існуючі контакти (або інші) робити не потрібно (пам'ятаємо - редюсери мають бути чистими функціями і працюють лише зі стейтом)

// reducers: {
//  deleteContact: (state, action) => {
//   state.contacts = state.contacts.filter(el => el.id !== action.payload)
//  },
//  addContact: (state, action) => {
//   state.contacts = [...state.contacts, action.payload]
//  },
// },

const contactsDataBase = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = {
  //   contacts: JSON.parse(localStorage.getItem('contacts')) ?? contaccontacts:tsDataBase,
  //   contacts: [],
  contacts: contactsDataBase,
}; // [{}, {}, {},...

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      // state.contacts = [...state.contacts,action.payload] ❌
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      }; // ✔
    }
    case 'contacts/deleteContact': {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload //action.payload will have contact id
        ),
      };
    }
    default:
      return state;
  }
};

const initialFilterState = {
  filter: '',
};

export const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case 'filter/setFilter': {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};

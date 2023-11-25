import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';

// Використовуємо саме Redux Toolkit
// Використати всі можливості redux, в Арр лише рендеримо компоненти, вся логіка роботи з контактими переміщається в компоненти
// Для фільтра було б добре створити окремий slice (не обов'язково, але так структура буде ще чистіша)

export const App = () => {
  const contacts = useSelector(state => state.contactsStore.contacts);
  const dispatch = useDispatch();
  // const getInitialContactsList = () => {
  //   return JSON.parse(localStorage.getItem('contacts')) ?? contactsDataBase;
  // };

  // const [contacts, setContacts] = useState(getInitialContactsList);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContactData = contactData => {
    const hasDuplicates = contacts.some(
      contact =>
        contact.name.toLowerCase().trim() ===
        contactData.name.toLowerCase().trim()
    );

    if (hasDuplicates) {
      Notify.warning(
        `Contact with name '${contactData.name}' has already been added!`,
        { timeout: 6000 }
      );
      return;
    }

    const addContactsAction = {
      type: 'contacts/addContact',
      payload: contactData,
    };

    dispatch(addContactsAction);
  };

  const filterChange = evt => {
    setFilter(evt.target.value);
  };

  const filterContacts = () => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  };

  const deleteContacts = id => {
    const deleteProductAction = {
      type: 'contacts/deleteContact',
      payload: id,
    };

    dispatch(deleteProductAction);
  };

  return (
    <div className="glass">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContactData} />
      <h2>Contacts</h2>
      <Filter filterValue={filter} handleFilterInputChange={filterChange} />
      <ContactList
        filteredContacts={filterContacts()}
        handleDeleteContact={deleteContacts}
      />
    </div>
  );
};

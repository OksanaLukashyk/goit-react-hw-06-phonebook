import css from './ContactList.module.css';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contactsStore.contacts);
  const filter = useSelector(state => state.filterStore.filter);
  const dispatch = useDispatch();

  const filterContacts = () => {
    if (!filter) {
      return contacts;
    }
    console.log(filter);
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  };

  const filteredContacts = filterContacts();

  const deleteContacts = id => {
    const deleteProductAction = {
      type: 'contacts/deleteContact',
      payload: id,
    };

    dispatch(deleteProductAction);
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <ContactListItem
          name={contact.name}
          number={contact.number}
          key={contact.id}
          deleteContact={() => deleteContacts(contact.id)}
        />
      ))}
    </ul>
  );
};

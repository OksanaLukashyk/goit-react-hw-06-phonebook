import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

// Використовуємо саме Redux Toolkit
// Використати всі можливості redux, в Арр лише рендеримо компоненти, вся логіка роботи з контактими переміщається в компоненти

export const App = () => {
  return (
    <div className="glass">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

import { AddContact } from './AddContact/AddContact';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const Api = () => {
  return (
    <div style={{ marginLeft: 'calc(50% - 150px)' }}>
      <p style={{ fontSize: '25px', fontWeight: 'bold' }}>Phonebook</p>
      <AddContact />
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Contacts</p>
      <Filter />
      <ContactList />
    </div>
  );
};

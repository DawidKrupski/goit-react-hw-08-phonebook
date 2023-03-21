import { AddContact } from '../AddContact/AddContact';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import css from './Api.module.css';

export const Api = () => {
  return (
    <div className={css.api}>
      <div>
        <p className={css.apiTitles}>Phonebook</p>
        <div className={css.addContact}>
          <AddContact />
        </div>
        <Filter />
      </div>
      <dvi>
        <p className={css.apiTitles}>Contacts</p>
        <ContactList />
      </dvi>
    </div>
  );
};

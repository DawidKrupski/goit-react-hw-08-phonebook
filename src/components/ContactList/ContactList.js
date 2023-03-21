import { useSelector, useDispatch } from 'react-redux';
import { selectContactItems, selectFilters } from 'redux/selectors';
import { deleteContactAction } from 'redux/operations';
import { Button } from '@chakra-ui/react';
import { setOpenContactAction, toggleModalAction } from 'redux/modalSlice';
import { UserButtonStyle } from 'components/GlobalStyles/GlobalStyles';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactItems);
  const filter = useSelector(selectFilters);

  const filteredContacts = filter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  const handleDelete = id => {
    dispatch(deleteContactAction(id));
  };

  const handleModal = contact => {
    dispatch(setOpenContactAction(contact));
    console.log(setOpenContactAction(contact));
    dispatch(toggleModalAction());
  };

  return (
    <div>
      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <li className={css.listItems} key={contact.id}>
            <div className={css.contacts}>
              {contact.name} - {contact.number}
            </div>
            <div className={css.contactsBtn}>
              <Button
                {...UserButtonStyle}
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </Button>
              <Button {...UserButtonStyle} onClick={() => handleModal(contact)}>
                Edit
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

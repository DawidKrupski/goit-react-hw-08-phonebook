import PropTypes from 'prop-types';
import css from './AddContact.module.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGetContact } from 'redux/selectors';
import { addContactAction, fetchContacts } from 'redux/operations';
import { Button, Input } from '@chakra-ui/react';
import { InputStyle } from 'components/GlobalStyles/GlobalStyles';
import { ButtonStyle } from 'components/GlobalStyles/GlobalStyles';

export const AddContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectGetContact);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    const contactExist = contacts.items.find(contact => contact.name === name);
    if (!contactExist) {
      dispatch(addContactAction({ name, number }));
    } else {
      alert(`${name} is already in contacts.`);
    }
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleInputChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <label htmlFor="name">Name</label>
        <Input
          {...InputStyle}
          value={name}
          onChange={handleInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <label htmlFor="number">Number</label>
        <Input
          {...InputStyle}
          value={number}
          onChange={handleInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <Button {...ButtonStyle} type="submit">
          Add contact
        </Button>
      </form>
    </>
  );
};

AddContact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

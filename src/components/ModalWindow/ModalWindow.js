import React from 'react';
import { selectModalOpened, selectModalState } from 'redux/selectors';
import { editOpenContactAction, toggleModalAction } from 'redux/modalSlice';
import { InputStyle } from 'components/GlobalStyles/GlobalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button, Input, ModalContent } from '@chakra-ui/react';
import { editContactAction } from 'redux/operations';
import { UserButtonStyle } from 'components/GlobalStyles/GlobalStyles';
import css from './ModalWindow.module.css';

export const ModalWindow = () => {
  const dispatch = useDispatch();
  const modalState = useSelector(selectModalState);
  const modalOpened = useSelector(selectModalOpened);

  const handleModal = () => {
    dispatch(toggleModalAction());
  };

  const handleModalChange = event => {
    const payload = { name: event.target.name, value: event.target.value };
    dispatch(editOpenContactAction(payload));
  };

  const handleSave = () => {
    dispatch(editContactAction(modalOpened));
    dispatch(toggleModalAction());
  };

  const handleModalClose = () => {
    dispatch(toggleModalAction());
  };

  return (
    <>
      <Modal
        className={css.modal}
        isCentered
        motionPreset="slideInBottom"
        isOpen={modalState}
        onClose={handleModalClose}
      >
        <ModalContent>
          <h2 className={css.modal__title}>Edit Contact</h2>
          <label className={css.modal__label} htmlFor="name">
            New name
          </label>
          <Input
            className={css.modal__input}
            {...InputStyle}
            value={modalOpened.name}
            onChange={handleModalChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <label className={css.modal__label} htmlFor="number">
            New number
          </label>
          <Input
            {...InputStyle}
            className={css.modal__input}
            value={modalOpened.number}
            onChange={handleModalChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <div className={css.buttons}>
            <Button
              {...UserButtonStyle}
              size="md"
              width="80px"
              onClick={handleModal}
            >
              Cancel
            </Button>
            <Button
              {...UserButtonStyle}
              size="md"
              width="80px"
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

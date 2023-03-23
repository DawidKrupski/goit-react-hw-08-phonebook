import { Button, Avatar } from '@chakra-ui/react';
import { ButtonStyle } from 'components/GlobalStyles/GlobalStyles';
import { logout } from 'redux/auth/authThunk';
import { selectEmail } from 'redux/auth/authSelector';
import { useDispatch, useSelector } from 'react-redux';
import css from './Logout.module.css';

export const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const userEmail = useSelector(selectEmail);

  return (
    <>
      <div className={css.logout}>
        <Avatar size="sm" src="https://bit.ly/broken-link" />
        <p>{userEmail}</p>
        <Button
          className={css.logoutBtn}
          {...ButtonStyle}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </>
  );
};

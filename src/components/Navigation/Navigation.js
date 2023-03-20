import { Button } from '@chakra-ui/react';
import { useAuth } from 'hook/useAuth/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectEmail } from 'redux/auth/auth.selector';
import { logout } from 'redux/auth/auth.thunk';
import { ButtonStyle } from 'components/GlobalStyles/GlobalStyles';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';

export const Navigation = () => {
  const navigate = useNavigate();
  const { isAuthorized } = useAuth();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const userEmail = useSelector(selectEmail);

  return (
    <main>
      <nav>
        {isAuthorized ? (
          <>
            <Avatar size="sm" src="https://bit.ly/broken-link" />
            <p>{userEmail}</p>
            <Button {...ButtonStyle} onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              marginRight="20px"
              {...ButtonStyle}
              onClick={() => navigate('/sign-in')}
            >
              Sign in
            </Button>
            <Button {...ButtonStyle} onClick={() => navigate('/register')}>
              Register
            </Button>
          </>
        )}
      </nav>
    </main>
  );
};

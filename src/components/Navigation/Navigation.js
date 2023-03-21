import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ButtonStyle } from 'components/GlobalStyles/GlobalStyles';
import css from './Navigation.module.css';

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={css.navigation}>
        <Button {...ButtonStyle} size="lg" onClick={() => navigate('/sign-in')}>
          Sign in
        </Button>
        <Button
          {...ButtonStyle}
          size="lg"
          onClick={() => navigate('/register')}
        >
          Register
        </Button>
      </div>
    </>
  );
};

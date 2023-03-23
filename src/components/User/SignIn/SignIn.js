import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/authThunk';
import { InputStyle } from 'components/GlobalStyles/GlobalStyles';
import { Input } from '@chakra-ui/react';
import css from './SignIn.module.css';
import { Link, useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterClick = event => {
    event.preventDefault();
    navigate('/register');
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form);
    dispatch(
      signIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.signin} onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <Input
          {...InputStyle}
          name="email"
          type={'email'}
          placeholder="email"
        ></Input>
      </label>
      <label>
        Password
        <Input
          {...InputStyle}
          name="password"
          type={'password'}
          placeholder="Password"
        ></Input>
      </label>
      <button className={css.signinBtn}>Sign-in</button>
      <Link onClick={handleRegisterClick}>
        You dont have account? Register here
      </Link>
    </form>
  );
};

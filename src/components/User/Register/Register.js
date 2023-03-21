import { Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth.thunk';
import { InputStyle } from 'components/GlobalStyles/GlobalStyles';
import css from './Register.module.css';
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignInClick = event => {
    event.preventDefault();
    navigate('/sign-in');
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log(form);
    form.reset();
  };

  return (
    <form className={css.register} onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <Input
          {...InputStyle}
          name="name"
          type={'text'}
          placeholder="Username"
        ></Input>
      </label>
      <label>
        Email
        <Input
          {...InputStyle}
          name="email"
          type={'email'}
          placeholder="Email"
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
      <button className={css.registerBtn}> Register </button>
      <Link onClick={handleSignInClick}>
        You already have account? Sign in here
      </Link>
    </form>
  );
};

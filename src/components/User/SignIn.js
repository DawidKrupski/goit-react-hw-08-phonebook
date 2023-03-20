import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/auth.thunk';
import { InputStyle } from 'components/GlobalStyles/GlobalStyles';
import { Button, Input } from '@chakra-ui/react';
import { ButtonStyle } from 'components/GlobalStyles/GlobalStyles';

export const SignIn = () => {
  const dispatch = useDispatch();

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
    <form onSubmit={handleSubmit} autoComplete="off">
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
      <button>Sign-in</button>
    </form>
  );
};

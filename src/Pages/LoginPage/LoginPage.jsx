import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Input } from '../RegisterPage/register.styled';
import { login } from 'redux/auth-operations';
import { getUserError } from 'redux/selectors';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(getUserError);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const data = { email, password };
    dispatch(login(data));
  };

  return (
    <div>
      <h2>To enter your phonebook, login please</h2>
      <Form onSubmit={handleSubmit}>
        <label>
          Email
          <Input
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
          />
        </label>
        <label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            required
          />
        </label>
        <Button type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </Form>
      {error && <p>Please try another email or password... </p>}
    </div>
  );
};

export default LoginPage;

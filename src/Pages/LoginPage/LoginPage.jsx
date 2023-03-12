import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Input } from '../RegisterPage/register.styled';
import { login } from 'redux/auth-operations';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const data = { email, password };
    dispatch(login(data));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
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
    </div>
  );
};

export default LoginPage;

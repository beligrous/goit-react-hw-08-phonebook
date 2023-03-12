import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Input } from './register.styled';
import { signup } from '../../redux/auth-operations';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const data = { name, email, password };
    dispatch(signup(data));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>For access phonebook, signup please</h2>
      <Form onSubmit={handleSubmit}>
        <label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
          />
        </label>
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
          Signup
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Input } from './register.styled';
import { signup } from '../../redux/auth-operations';
import { getUserError } from 'redux/selectors';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(getUserError);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const data = { name, email, password };
    dispatch(signup(data));
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
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
          Signup
        </Button>
      </Form>
      {error && <p>Please try another name or email... </p>}
    </div>
  );
};

export default RegisterPage;

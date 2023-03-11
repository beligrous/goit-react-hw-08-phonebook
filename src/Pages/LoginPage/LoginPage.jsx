import { Form, Button, Input } from '../RegisterPage/register.styled';

const LoginPage = () => {
  return (
    <div>
      <h2>To enter your phonebook, login please</h2>
      <Form>
        <label>
          Email
          <Input type="email" name="email" required />
        </label>
        <label>
          Password
          <Input type="password" name="password" required />
        </label>
        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
};

export default LoginPage;

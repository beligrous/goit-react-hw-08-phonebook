import { Form, Button, Input } from './register.styled';

const RegisterPage = () => {
  return (
    <div>
      <h2>For access phonebook, register please</h2>
      <Form>
        <label>
          Name
          <Input type="text" name="name" required />
        </label>
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

export default RegisterPage;

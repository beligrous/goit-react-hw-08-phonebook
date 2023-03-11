import { Nav, Link } from './navbar.styled';

const NavBar = () => {
  return (
    <Nav>
      <Link to="/">Register</Link> | <Link to="/login">Login</Link>
    </Nav>
  );
};

export default NavBar;

import { Nav, Link } from './navbar.styled';
import { useSelector } from 'react-redux';
import { getIsLogin, getUserName } from 'redux/selectors';

const NavBar = () => {
  const isLoggined = useSelector(getIsLogin);
  const userName = useSelector(getUserName);
  return (
    <Nav>
      {isLoggined ? (
        <>
          <span>Hello {userName}</span> <button type="button">LogOut</button>
        </>
      ) : (
        <>
          <Link to="/users/signup">Signup</Link>
          <Link to="/users/login">Login</Link>
        </>
      )}
    </Nav>
  );
};

export default NavBar;

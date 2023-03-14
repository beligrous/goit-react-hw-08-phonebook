import { Nav, Link, Button } from './navbar.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLogin, getUserName } from 'redux/selectors';
import { logout } from 'redux/auth-operations';

const NavBar = () => {
  const isLoggined = useSelector(getIsLogin);
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  return (
    <Nav>
      {isLoggined ? (
        <>
          <span>Hello, {userName}</span>
          <Button type="button" onClick={handleLogout}>
            LogOut
          </Button>
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

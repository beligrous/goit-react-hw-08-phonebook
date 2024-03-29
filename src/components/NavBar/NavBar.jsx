import { Nav, Link, Button } from './navbar.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLogin, getUserName } from 'redux/selectors';
import { logout } from 'redux/auth-operations';
import { changeAdress } from 'redux/auth-slice';

const NavBar = () => {
  const isLoggined = useSelector(getIsLogin);
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

  const handleAdressChange = () => {
    dispatch(changeAdress());
  };

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
          <Link to="/users/signup" onClick={handleAdressChange}>
            Signup
          </Link>
          <Link to="/users/login" onClick={handleAdressChange}>
            Login
          </Link>
        </>
      )}
    </Nav>
  );
};

export default NavBar;

import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLogin, getToken } from 'redux/selectors';

const PrivateRoute = () => {
  const isLogin = useSelector(getIsLogin);
  const token = useSelector(getToken);
  if (!isLogin && token) {
    return <p>...loading</p>;
  }
  if (!isLogin && !token) {
    return <Navigate to={'/users/login'} />;
  }
  return <Outlet />;
};

export default PrivateRoute;

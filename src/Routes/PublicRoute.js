import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLogin, getToken } from 'redux/selectors';

const PublicRoute = () => {
  const isLogin = useSelector(getIsLogin);
  const token = useSelector(getToken);
  if (!isLogin && token) {
    return <p>...loading</p>;
  }
  if (isLogin) {
    return <Navigate to={'/contacts'} />;
  }
  return <Outlet />;
};

export default PublicRoute;

import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLogin, getToken } from 'redux/selectors';
import { FallingLines } from 'react-loader-spinner';

const PrivateRoute = () => {
  const isLogin = useSelector(getIsLogin);
  const token = useSelector(getToken);
  if (!isLogin && token) {
    return (
      <FallingLines
        color="burlywood"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    );
  }
  if (!isLogin && !token) {
    return <Navigate to={'/users/login'} />;
  }
  return <Outlet />;
};

export default PrivateRoute;

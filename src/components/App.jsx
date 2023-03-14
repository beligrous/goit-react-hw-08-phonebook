import { Container } from './App.styled';
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { FallingLines } from 'react-loader-spinner';
import NavBar from './NavBar/NavBar';
import PublicRoute from 'Routes/PublicRoute';
import PrivateRoute from 'Routes/PrivateRoute';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth-operations';
const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const PhonebookPage = lazy(() =>
  import('../Pages/PhonebookPage/PhonebookPage')
);
const RegisterPage = lazy(() => import('../Pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../Pages/LoginPage/LoginPage'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <Container>
      <NavBar />
      <Suspense
        fallback={
          <FallingLines
            color="burlywood"
            width="100"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<PublicRoute />}>
            <Route path="/users/signup" element={<RegisterPage />} />
            <Route path="/users/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<PhonebookPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
}

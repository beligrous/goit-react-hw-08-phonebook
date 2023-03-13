import { Container } from './App.styled';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'Pages/HomePage/HomePage';
import PhonebookPage from '../Pages/PhonebookPage/PhonebookPage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import LoginPage from 'Pages/LoginPage/LoginPage';
import NavBar from './NavBar/NavBar';
import PublicRoute from 'Routes/PublicRoute';
import PrivateRoute from 'Routes/PrivateRoute';

export function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route element={<PublicRoute />}>
            <Route path="/users/signup" element={<RegisterPage />} />
            <Route path="/users/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<PhonebookPage />} />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
}

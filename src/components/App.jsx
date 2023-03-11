import { Container } from './App.styled';
import { Routes, Route } from 'react-router-dom';
import PhonebookPage from '../Pages/PhonebookPage/PhonebookPage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';
import LoginPage from 'Pages/LoginPage/LoginPage';
import NavBar from './NavBar/NavBar';

export function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/phonebook" element={<PhonebookPage />} />
      </Routes>
    </Container>
  );
}

import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h2>Hello</h2>
      <Outlet />
    </>
  );
};

export default HomePage;

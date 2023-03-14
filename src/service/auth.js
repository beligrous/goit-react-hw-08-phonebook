import axios from 'axios';

export const instanse = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (instanse.defaults.headers.authorization = `Bearer ${token}`);
  }
  instanse.defaults.headers.authorization = '';
};

export const signupUser = async data => {
  const response = await instanse.post('/users/signup', data);
  setToken(response.data.token);
  return response;
};

export const loginUser = async data => {
  const response = await instanse.post('/users/login', data);
  setToken(response.data.token);
  return response;
};

export const logoutUser = async () => {
  await instanse.post('users/logout');
  setToken();
};

export const currentUser = async token => {
  setToken(token);
  const response = await instanse.get('users/current');
  return response.data;
};

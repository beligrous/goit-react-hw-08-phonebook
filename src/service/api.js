import { instanse } from './auth';

// const instanse = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
// });

export const fetchAllContacts = async () => {
  const response = await instanse.get('/contacts');
  return response.data;
};

export const addNewContact = async data => {
  const response = await instanse.post('/contacts', data);
  return response;
};

export const delContact = async id => {
  const response = await instanse.delete(`/contacts/${id}`);
  return response;
};

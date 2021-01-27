import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3030';

const fetchContacts = () => {
  return axios.get('/contacts').then(response => response.data);
};

const addContact = contact => {
  return axios.post('/contacts', contact).then(({ data }) => data);
};

const deleteContact = id => {
  return axios.delete(`/contacts/${id}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchContacts, addContact, deleteContact };

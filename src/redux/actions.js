import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('fetchContactsRequest');
const fetchContactsSuccess = createAction('fetchContactsSuccess');
const fetchContactsError = createAction('fetchContactsError');

const addContactRequest = createAction('addContactRequest');
const addContactSuccess = createAction('addContactSuccess');
const addContactError = createAction('addContactError');

const deleteContactRequest = createAction('deleteContactRequest');
const deleteContactSuccess = createAction('deleteContactSucess');
const deleteContactError = createAction('deleteContactError');

// const deleteContact = createAction('phoneBook/Delete');
const changeFilter = createAction('phoneBook/Filter');

// const addContact = (name, number) => ({
//   type: types.Add,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// const deleteContact = (id) => ({
//   type: types.Delete,
//   payload: id,
// })

// const changeFilter = (value) => ({
//   type: types.Filter,
//   payload: value,
// })

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
};

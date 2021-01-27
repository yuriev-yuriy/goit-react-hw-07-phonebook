import { createSelector } from '@reduxjs/toolkit';

export const getIsLoading = state => state.loading;
export const getFilter = state => state.filter;
export const getContacts = state => state.contacts;
export const getFilteredContacts = createSelector(
  [getFilter, getContacts],
  (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter),
    );
  },
);

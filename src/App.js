import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import operations from './redux/operations';
import ContactForm from './Phonebook/ContactForm';
import Filter from './Phonebook/Filter';
import ContactList from './Phonebook/ContactList';
import s from './App.module.css';
import { getIsLoading } from './redux/selectors';

const App = ({ isLoading, fetchContacts }) => {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <div className={s.App}>
      <div className={s.Wrapper}>
        <h1>Phonebook</h1>
        <ContactForm />
        {isLoading ? <h1>Loading...</h1> : <h2>Contacts</h2>}
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

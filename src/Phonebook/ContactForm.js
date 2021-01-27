import { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import s from '../App.module.css';
import operations from '../redux/operations';

const ContactForm = ({ contacts, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();

  const reset = () => {
    setName('');
    setNumber('');
  };

  const changeNameInput = event => {
    setName(event.currentTarget.value, ...name);
  };

  const changeNumberInput = event => {
    setNumber(event.currentTarget.value);
  };

  const makeSubmit = event => {
    event.preventDefault();

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
      reset();
      return;
    }
    onSubmit(name, number);
    reset();
  };

  return (
    <>
      <form onSubmit={makeSubmit}>
        <label htmlFor={nameInputId}>
          Name
          <input
            id={nameInputId}
            type="text"
            value={name}
            onChange={changeNameInput}
            required
          />
        </label>

        <label htmlFor={numberInputId}>
          Number
          <input
            id={numberInputId}
            type="tel"
            value={number}
            onChange={changeNumberInput}
            required
          />
        </label>
        <button className={s.Btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

const mapStateToProps = state => {
  const { contacts } = state;
  return {
    contacts: contacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(operations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

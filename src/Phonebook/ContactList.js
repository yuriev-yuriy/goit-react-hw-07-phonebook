import { connect } from 'react-redux';
import operations from '../redux/operations';
import { getFilteredContacts } from '../redux/selectors';

const ContactList = ({ contacts, delMethot }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}:{number}
          <button onClick={() => delMethot(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  contacts: getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  delMethot: id => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

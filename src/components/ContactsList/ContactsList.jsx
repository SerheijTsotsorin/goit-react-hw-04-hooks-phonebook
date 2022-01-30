import PropTypes from 'prop-types';
import './ContactsList.css';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className="ContactsList">
    {contacts.map(contact => (
      <li key={contact.id} className="ContactsList__item">
        <p className="ContactsList__text">
          {contact.name}: {contact.number}
        </p>
        <button
          onClick={() => onDeleteContact(contact.id)}
          className="ContactsList__button"
        >
          delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

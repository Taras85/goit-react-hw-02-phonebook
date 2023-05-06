import PropTypes from 'prop-types';
// import { ContactItem } from './ContactItem';
// import s from '../ContactList/ContactStyle.module.scss';

export function ContactList({ contacts, onDeleteContact,}) {
  console.log(contacts);
  return (
    <ul >
      {contacts.map(({id, name, number})=>(
            <li >
            <strong>{name}</strong>
            <span >{number}</span>
            <button
              
              type="button"
              id={id}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
      ))}
     
    </ul>
  );
}

ContactList.prototype = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
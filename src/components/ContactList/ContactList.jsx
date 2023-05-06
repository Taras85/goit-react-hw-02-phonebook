import PropTypes from 'prop-types';
import s from './ContactList.module.css'
import { nanoid } from 'nanoid'




export function ContactList({ contacts, onDeleteContact}) {

  return (
    <ul className={s.contactList}>
      {contacts.map(({id, name, number})=>(
          <li key={nanoid()} className={s.contactItem}>
            <span className={s.contactName} >{name}:</span>
            <span >{number}</span>
            <button className={s.contactButton}
              type="button"
              id={nanoid()}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsData } from 'redux/operations/operation';

import { getFilteredContacts } from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteUser = id => {
    dispatch(deleteContactsData(id));
  };

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <p className={css.text}>{contact.name}</p>
          <p className={css.text}>{contact.number}</p>
          <button
            onClick={() => handleDeleteUser(contact.id)}
            type="button"
            className={css.btn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

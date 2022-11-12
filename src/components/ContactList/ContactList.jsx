import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsData } from 'redux/operations/operation';

import { getFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteUser = id => {
    dispatch(deleteContactsData(id));
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <button onClick={() => handleDeleteUser(contact.id)} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsData } from 'redux/operations/operation';

import { getFilteredContacts } from 'redux/selectors';
import { Audio } from 'react-loader-spinner';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const idRef = useRef();

  const handleDeleteUser = id => {
    idRef.current = id;
    dispatch(deleteContactsData(id));
  };

  const status = useSelector(state => state.contacts.status);

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>

          {status === 'LOADING' && idRef.current === contact.id ? (
            <Audio
              height="20"
              width="20"
              radius="9"
              color="green"
              ariaLabel="loading"
            />
          ) : (
            <button
              onClick={() => handleDeleteUser(contact.id)}
              type="button"
              disabled={idRef.current === contact.id}
            >
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

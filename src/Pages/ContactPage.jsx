import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Phonebook } from 'components/Phonebook';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsData } from 'redux/operations/operation';

export const PhoneBookPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsData());
  }, [dispatch]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101',
          gap: 10,
        }}
      >
        <Phonebook />
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

export default PhoneBookPage;

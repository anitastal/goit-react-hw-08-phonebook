import { Login } from 'Pages/AuthorizationPage';
import { Registration } from 'Pages/RegistrationPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getContactsData } from 'redux/operations/operation';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout/Layout';
import { Phonebook } from './Phonebook';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsData());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101',
        gap: 10,
      }}
    >
      <Layout>
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/contacts" element={<Phonebook />} /> */}
        </Routes>

        <h1>Phonebook</h1>
        <Phonebook />
        <h2>Contacts</h2>
        <Filter />

        <ContactList />
      </Layout>
    </div>
  );
};

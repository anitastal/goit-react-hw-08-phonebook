import { PhoneBookPage } from 'Pages/ContactPage';
import { HomePage } from 'Pages/HomePage/HomePage';

import { Login } from 'Pages/LoginPage/LogInPage';
import { Registration } from 'Pages/RegistrationPage/RegistrationPage';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getUser } from 'redux/auth/authOperation';

import { Layout } from './Layout/Layout';
import PublicRoute from './PablicRoutes/PablicRoutes';
import { PrivateRoutes } from './PrivateRoutes/PrivateRoutes';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div>
      <Layout>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/" element={<PublicRoute />}>
              <Route path="/register" element={<Registration />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/" element={<PrivateRoutes />}>
              <Route path="/contacts" element={<PhoneBookPage />} />
            </Route>
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};

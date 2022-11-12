import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors';

export const PrivateRoutes = () => {
  const token = useSelector(getIsLoggedIn);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

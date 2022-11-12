import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { logOutForm } from 'redux/auth/authOperation';
import { getIsLoggedIn } from 'redux/selectors';

export const Header = () => {
  // const dispatch = useDispatch();

  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        {!isLoggedIn && (
          <ul>
            <li>
              <NavLink to="/register">Registration</NavLink>
            </li>
            <li>
              <NavLink to="/login">Authorization</NavLink>
            </li>
          </ul>
        )}
      </nav>
      {isLoggedIn && (
        <>
          <UserMenu />
        </>
      )}
    </header>
  );
};

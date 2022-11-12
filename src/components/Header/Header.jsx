import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getIsLoggedIn } from 'redux/selectors';
import css from './Header.module.css';

export const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header>
      <nav className={css.nav}>
        <NavLink to="/">Home</NavLink>
        {!isLoggedIn && (
          <ul className={css.list}>
            <li className={css.item}>
              <NavLink to="/register">Registration</NavLink>
            </li>
            <li className={css.item}>
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

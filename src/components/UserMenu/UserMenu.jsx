import { useDispatch, useSelector } from 'react-redux';
import { logOutForm } from 'redux/auth/authOperation';
import css from './UserMenu.module.css';

function UserMenu() {
  const name = useSelector(state => state.auth.user?.name);
  const email = useSelector(state => state.auth.user?.email);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutForm());
  };

  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>
          <p className={css.text}>Hello {name}</p>
          <p className={css.text}>{email}</p>
          <button type="button" onClick={handleLogOut} className={css.btn}>
            Logout
          </button>
        </li>
      </ul>
    </>
  );
}
export default UserMenu;

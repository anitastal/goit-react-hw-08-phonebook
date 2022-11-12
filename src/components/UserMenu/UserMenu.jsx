import { useDispatch, useSelector } from 'react-redux';
import { logOutForm } from 'redux/auth/authOperation';

function UserMenu() {
  const name = useSelector(state => state.auth.user?.name);
  const email = useSelector(state => state.auth.user?.email);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutForm());
  };

  return (
    <>
      <ul>
        <li>
          <p>Hello {name}</p>
          <p>{email}</p>
          <button type="button" onClick={handleLogOut}>
            logout
          </button>
        </li>
      </ul>
    </>
  );
}
export default UserMenu;

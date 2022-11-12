import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInForm } from 'redux/auth/authOperation';
import css from './LoginPage.module.css';
export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const inputs = {
    email: setEmail,
    password: setPassword,
  };

  const getDataLoginInput = e => {
    inputs[e.target.name](e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logInForm({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Enter Your Email
        <input
          className={css.input}
          required
          onChange={getDataLoginInput}
          name="email"
          value={email}
          type="email"
        />
      </label>
      <label className={css.label}>
        Enter Your Password
        <input
          className={css.input}
          required
          onChange={getDataLoginInput}
          name="password"
          value={password}
          type="password"
        />
      </label>
      <button type="submit" className={css.btn}>
        Log In
      </button>
    </form>
  );
};

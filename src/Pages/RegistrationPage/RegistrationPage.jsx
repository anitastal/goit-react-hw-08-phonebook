import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registationForm } from 'redux/auth/authOperation';
import css from './Registration.module.css';

export const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const dispatch = useDispatch();

  //   const inputs = {
  //     name: setName,
  //     email: setEmail,
  //     password: setPassword,
  //     repeatPassword: setRepeatPassword,
  //   };

  //   const getDataRegInput = e => {
  //     inputs[e.target.name](e.target.value);
  //   };

  const getDataInput = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'repeatPassword':
        setRepeatPassword(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (password === repeatPassword) {
      dispatch(registationForm({ name, email, password, repeatPassword }));
    } else {
      alert('Passwords do not match');
    }
    setName('');
    setEmail('');
    setPassword('');
    setRepeatPassword('');
  };

  return (
    <form onSubmit={handleFormSubmit} className={css.form}>
      <label className={css.label}>
        Enter Your Name
        <input
          className={css.input}
          required
          onChange={getDataInput}
          name="name"
          value={name}
          type="text"
        />
      </label>
      <label className={css.label}>
        Enter Your Email
        <input
          className={css.input}
          required
          onChange={getDataInput}
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
          onChange={getDataInput}
          name="password"
          value={password}
          type="password"
        />
      </label>
      <label className={css.label}>
        Repeat Password
        <input
          className={css.input}
          required
          onChange={getDataInput}
          name="repeatPassword"
          value={repeatPassword}
          type="password"
        />
      </label>
      <button type="submit" className={css.btn}>
        Registration
      </button>
    </form>
  );
};

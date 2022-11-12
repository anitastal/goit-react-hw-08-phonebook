import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInForm } from 'redux/auth/authOperation';

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
    <form onSubmit={handleSubmit}>
      <label>
        Enter Your Email
        <input
          required
          onChange={getDataLoginInput}
          name="email"
          value={email}
          type="email"
        />
      </label>
      <label>
        Enter Your Password
        <input
          required
          onChange={getDataLoginInput}
          name="password"
          value={password}
          type="password"
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

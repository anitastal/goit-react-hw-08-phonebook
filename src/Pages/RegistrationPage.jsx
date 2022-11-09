import { useState } from 'react';
// import { useDispatch } from 'react-redux';

export const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  //   const dispatch = useDispatch();

  //   const inputs = {
  //     name: setName,
  //     email: setEmail,
  //     password: setPassword,
  //     repeatPassword: setRepeatPassword,
  //   };

  //   const getDataInput = e => {
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
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Enter Your Name
        <input
          required
          onChange={getDataInput}
          name="name"
          value={name}
          type="text"
        />
      </label>
      <label>
        Enter Your Email
        <input
          required
          onChange={getDataInput}
          name="email"
          value={email}
          type="email"
        />
      </label>
      <label>
        Enter Your Password
        <input
          required
          onChange={getDataInput}
          name="password"
          value={password}
          type="password"
        />
      </label>
      <label>
        Repeat Password
        <input
          required
          onChange={getDataInput}
          name="repPassword"
          value={repeatPassword}
          type="password"
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

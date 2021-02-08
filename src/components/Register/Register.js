import React, { useState } from 'react';
import { withRoute } from 'react-router'
import './Register.css';
import app from '../../base';

const Register = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      await app.auth().createUserWithEmailAndPassword(email.value, password.value);
      history.push('/home');
    } catch (error) {
      alert(error);
    }
  };

  console.log(email);
  console.log(password);
  return (
    <form
      className="register"
      onSubmit={event => handleSubmit(event)}
    >
      <h2 className="register__title">Register</h2>
      <input
        type="text"
        placeholder="First name"
        className="register__first-name"
      />
      <input
        type="text"
        placeholder="Last name"
        className="register__last-name"
      />
      <input
        type="email"
        placeholder="Email"
        className="register__email"
        name="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="register__password"
        name="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button
        type="submit"
        className="register__submit"
      >
        Login
      </button>
      <a
        className="register__login"
        onClick={() => history.push('/')}
      >
        Already registered? Log in
      </a>
    </form>
  )
}

export default Register;
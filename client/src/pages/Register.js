import React, { useState } from 'react';
import { main, logo1, logo2, logo3, logos, login } from '../assets/images';
import { useGlobalContext } from '../context/appContext';
import { Spinner, Alert } from '../components';

const defaultForm = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const { isLoading, showAlert } = useGlobalContext();
  const [values, setValues] = useState(defaultForm);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleMember = (e) => {
    e.preventDefault();
    setValues({ ...values, isMember: !values.isMember });
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <section className="section-register">
      <img src={login} alt="login" className="form-login__img" />
      <form className="form-login">
        <h2 className="heading__secondary form__heading">{`${
          values.isMember ? '🎈Login🎈' : '🎈Register🎈'
        }`}</h2>

        {showAlert && (
          <Alert type={'danger'} text={'Something went wrong!'}></Alert>
        )}

        {values.isMember || (
          <div className="form-login__control">
            <label htmlFor="name" className="label-login">
              Name
            </label>
            <input
              type="text"
              className="input-login"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </div>
        )}

        <div className="form-login__control">
          <label htmlFor="email" className="label-login">
            Email
          </label>
          <input
            type="text"
            className="input-login"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-login__control">
          <label htmlFor="password" className="label-login">
            Password
          </label>
          <input
            type="password"
            className="input-login"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-submitForm">Register</button>

        <p className="form-login__text">
          {`${values.isMember ? `Don't have account!` : `Already a member!`}`}{' '}
          <button className="btn-link" onClick={handleMember}>
            {`${values.isMember ? 'Register here!' : 'Login now!'}`}
          </button>
        </p>
      </form>
    </section>
  );
};

export default Register;

import React, { useState } from 'react';
import { useGlobalContext } from '../context/appContext';
import { Spinner, Alert } from '../components';
import { loginImg } from '../assets/images';
import { useNavigate } from 'react-router-dom';

const defaultForm = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const navigate = useNavigate();
  const { isLoading, showAlert, login, alertType, alertText, register } =
    useGlobalContext();
  const [values, setValues] = useState(defaultForm);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleMember = (e) => {
    e.preventDefault();
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');

    if (values.isMember) {
      login({
        name: values.name,
        email: values.email,
        password: values.password,
      });
      navigate('/dashboard');
    } else {
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      });
    }
  };
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <section className="section-register">
      <img src={loginImg} alt="login" className="form-login__img" />
      <form className="form-login" onSubmit={handleSubmit}>
        <h2 className="heading__secondary form__heading">{`${
          values.isMember ? '🎈Login🎈' : '🎈Register🎈'
        }`}</h2>

        {showAlert && <Alert type={alertType} text={alertText}></Alert>}

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

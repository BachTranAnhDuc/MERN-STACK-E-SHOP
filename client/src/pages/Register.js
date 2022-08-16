import React from 'react';
import { main, logo1, logo2, logo3, logos, login } from '../assets/images';

const Register = () => {
  return (
    <section className="section-register">
      <img src={login} alt="login" className="form-login__img" />
      <form className="form-login">
        <h2 className="heading__secondary">Register</h2>
        <div className="form-login__control">
          <label htmlFor="name" className="label-login">
            Name
          </label>
          <input type="text" className="input-login" />
        </div>
        <div className="form-login__control">
          <label htmlFor="name" className="label-login">
            Email
          </label>
          <input type="text" className="input-login" />
        </div>
        <div className="form-login__control">
          <label htmlFor="name" className="label-login">
            Password
          </label>
          <input type="text" className="input-login" />
        </div>

        <button className="btn btn-submitForm">Register</button>

        <p className="form-login__text">
          Don't have account!{' '}
          <button className="btn-link">Register here!</button>
        </p>
      </form>

      {/* <dir></dir> */}
    </section>
  );
};

export default Register;

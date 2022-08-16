import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import { useGlobalContext } from '../context/appContext';

const Navbar = () => {
  const { switchRegister } = useGlobalContext();

  return (
    <nav className="nav">
      <NavLink to={'/'}>
        <img
          src={logo}
          alt="logo"
          className="nav__logo"
          onClick={() => switchRegister(true)}
        />
      </NavLink>

      <div className="nav-btns">
        <NavLink to={'/register'}>
          <button
            className="btn btn--login"
            onClick={() => switchRegister(false)}
          >
            Signin / Signout
          </button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to={'/'}>
        <img src={logo} alt="logo" className="nav__logo" />
      </NavLink>
      <NavLink to={'/register'} className="btn btn--login">
        Signin / Signout
      </NavLink>
    </nav>
  );
};

export default Navbar;

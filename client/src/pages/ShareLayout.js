import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';
import { useGlobalContext } from '../context/appContext';

const ShareLayout = () => {
  const { isLanding } = useGlobalContext();

  return (
    <div className={`${isLanding ? 'container' : 'container-register'}`}>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default ShareLayout;

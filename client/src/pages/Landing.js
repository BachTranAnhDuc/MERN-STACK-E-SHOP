import React from 'react';
import { main, logo1, logo2, logo3, logos } from '../assets/images';
import { useGlobalContext } from '../context/appContext';
import { Spinner } from '../components';

const Landing = () => {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="header">
      <h1 className="header__heading heading__primary">
        Ecom<span className="header__span-heading">merce</span> Shop
      </h1>
      <div className="header__container-text">
        {/* <img src={wave} alt="" /> */}
        <p className="header__text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy.
        </p>
      </div>

      <div className="header__logos">
        {logos.map((el, index) => {
          return (
            <img key={index} src={el} alt="logo" className="header__logo" />
          );
        })}
      </div>

      <img src={main} alt="main svg" className="header__img" />
    </div>
  );
};

export default Landing;

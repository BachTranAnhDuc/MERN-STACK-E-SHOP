import React from 'react';

const Alert = ({ type, text }) => {
  return (
    <div className={`alert ${type}`}>
      <p className="alert__text">{text}</p>
    </div>
  );
};

export default Alert;

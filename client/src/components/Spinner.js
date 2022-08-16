import React from 'react';

const Spinner = () => {
  return (
    <section className="section-loading">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Spinner;

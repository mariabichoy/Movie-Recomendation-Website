import React from 'react';

const hero = () => {
  return (
    <section className="home" id="home">
      <div className="overlay">
        <div className="container">
          <div className="row g-5 align-items-center justify-content-center vh-100">
            <div className="col-md-8">
              <div className="msg text-center py-5 text-white">
                <h1 className="fa-4x">
                  Welcome To <span>Movies</span> Hub
                </h1>
                <p className="lead">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita culpa
                  vitae blanditiis nulla impedit dolorem?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;

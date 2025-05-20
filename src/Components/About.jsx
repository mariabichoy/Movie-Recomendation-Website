import React from 'react';

const About = () => {
  return (
    <section className="about py-5" id="about">
      <div className="container">
        <div className="about-caption py-5 text-center">
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique earum vel doloremque
            neque minima, enim quidem. At odit labore exercitationem facere illum minus placeat nobis
            libero inventore possimus, rem sed. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nesciunt accusamus, non consectetur sit, voluptatibus eum ipsum recusandae, eligendi nihil
            obcaecati amet maiores sed fugit dignissimos aperiam illo modi fugiat ab?
          </p>
        </div>
        <div className="row g-5">
          <div className="col-md-4">
            <div className="about-item shadow rounded py-5 px-3 text-center">
              <h4>Action</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-item shadow rounded py-5 px-3 text-center">
              <h4>Comdey</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-item shadow rounded py-5 px-3 text-center">
              <h4>Drama</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

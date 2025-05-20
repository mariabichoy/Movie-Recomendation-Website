import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-center py-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-3">
            <div className="footer text-white">
              <h6>&copy;Copyright. All Reserved <span>Sohaila && Maria && Emily && Mohamed</span></h6>
              <div className="footer-social d-flex justify-content-evenly align-items-baseline py-2">
                <a href="https://www.facebook.com/sohaila.ebrahim.906/" className="fs-4 fa-brands fa-facebook" />
                <a href="https://www.linkedin.com/in/sohaila-ebrahime-650474270/" className="fs-4 fa-brands fa-linkedin" />
                <a href="https://github.com/Sohailaibrahime66" className="fs-4 fa-brands fa-github" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

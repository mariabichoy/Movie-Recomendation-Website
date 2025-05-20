import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./NavBar.css";
import icon from '../Pictures/icon.png';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      const userData = JSON.parse(localStorage.getItem('data'));
      if (userData && userData.length > 0) {
        setUserName(userData[0].userName); 
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear(); 
    setIsLoggedIn(false); 
    navigate('/');  
  };

  const handleLogin = () => {
    navigate('/login'); 
  };

  return (
    <>
      <div className="to-up position-fixed end-0 bottom-0 m-5 fa-2x">
        <i className="fas fa-arrow-alt-circle-up"></i>
      </div>

      <nav className="navbar navbar-expand-lg p-2 navbar-dark">
        <div className="container">
          <a className="navbar-brand fa-2xl" href="#home">
            <img style={{ width: '3rem' }} src={icon} alt="Site Icon" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Catiegories">Categories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Movie">Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contacts</Link>
              </li>
            </ul>

            {isLoggedIn ? (
              <>
                <span className="fw-bold mx-4">Hi {userName}</span>
                <button className="btn btn-outline-dark btn-sm" onClick={handleLogout}>LogOut</button>
              </>
            ) : (
              <button className="btn btn-outline-dark btn-sm" onClick={handleLogin}>Login</button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

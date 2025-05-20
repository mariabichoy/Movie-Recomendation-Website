import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/HomePage';
import Contact from "./Components/Contact/Contact";
import Catogrie from "./Components/catiegories/catiegories";
import About from './Components/About';
import Category from './Components/Category';
import Movie from "./Components/Ourblog/Movie";
import Footer from './Components/Footer';
import Login from "./Components/Login&Register/Login/Login";
import Register from "./Components/Login&Register/Register/Register";

function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catiegories" element={<Catogrie />} />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onNavigate }) => {
  const [open, setOpen] = useState(false);

  const go = (page) => {
    setOpen(false);
    onNavigate && onNavigate(page);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="Ben 10 Logo" />
      </div>

      <button className="mobile-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
        <span className={`burger ${open ? 'open' : ''}`} />
      </button>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li onClick={() => go('home')}>Home</li>
        <li onClick={() => go('aliens')}>Aliens</li>
        <li onClick={() => go('episodes')}>Episodes</li>
        <li onClick={() => go('games')}>Games</li>
        <li onClick={() => go('themesong')}>Theme Song</li>
        <li onClick={() => go('about')}>About</li>
      </ul>

      <div className="nav-buttons">
        <button className="btn btn-outline">Login</button>
        <button className="btn btn-fill">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;

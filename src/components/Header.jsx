import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/ryll-logo-small.png";

export const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="ryll logo" />
      <nav className="navbar">
        {/* Make sure logo.svg is inside the public folder */}
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

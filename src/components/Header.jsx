import React from "react";

import Logo from "../assets/ryll-logo.png";

export const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        {/* Make sure logo.svg is inside the public folder */}
        <img src={Logo} alt="ryll logo" />
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

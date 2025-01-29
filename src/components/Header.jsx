import React from "react";

import Logo from "../assets/ryll-logo.png";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="ryll logo" />
        <span>RYLL</span>
      </div>
    </header>
  );
};

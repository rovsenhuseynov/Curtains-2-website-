import React from "react";
import { NavLink } from "react-router-dom";
import logo_img from "../../assets/images/SVG_formats/curtain_logo_6/curtains.svg";

function Logo() {
  return (
    <div className="logo">

      <NavLink to="/">
        <div className="header-nav__logo">
          <img src={logo_img} alt="logo" className="header-nav__logo-img" />
          <div className="header-nav__logo-text">
            <h3 className="header-nav__logo-text-h3">Curtains</h3>
            <h5 className="header-nav__logo-text-h6">and home textiles</h5>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Logo;

import React from "react";
import "./DropDownMenu.scss";
import { NavLink } from "react-router-dom";

const DropDownMenu = () => {
  return (
    <ul className="dropdown">
      <li>
        <NavLink to="/tulle">TÜLLƏR</NavLink>
      </li>
      <li>
        <NavLink to="/thick_curtains">QALIN PƏRDƏLƏR</NavLink>
      </li>
      <li>
        <NavLink to="/subtle_blackout">GÜNƏŞLİK</NavLink>
      </li>
      <li>
        <NavLink to="/blackout">GÜNKEÇİRMƏZ</NavLink>
      </li>
      <li>
        <NavLink to="/peculiarities">BİLGİLƏR</NavLink>
      </li>
    </ul>
  );
};

export default DropDownMenu;

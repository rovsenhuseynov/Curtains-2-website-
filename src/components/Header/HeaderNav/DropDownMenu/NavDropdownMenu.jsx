import React from "react";
import "./DropDownMenu.scss";
import { NavLink } from "react-router-dom";

const DropDownMenu = () => {
  return (
    <ul className="dropdown">
      <li className="dropdown__item">
        <NavLink to="/tulle">TÜLLƏR</NavLink>
      </li>
      <li className="dropdown__item">
        <NavLink to="/thick_curtains">QALIN PƏRDƏLƏR</NavLink>
      </li>
      <li className="dropdown__item">
        <NavLink to="/subtle_blackout">GÜNƏŞLİK</NavLink>
      </li>
      <li className="dropdown__item">
        <NavLink to="/blackout">GÜNKEÇİRMƏZ</NavLink>
      </li>
      <li className="dropdown__item">
        <NavLink to="/peculiarities">BİLGİLƏR</NavLink>
      </li>
    </ul>
  );
};

export default DropDownMenu;

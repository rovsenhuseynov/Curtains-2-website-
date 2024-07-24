import React from "react";
import "./DropDownMenu.scss";
import { NavLink } from "react-router-dom";

const DropDownMenu = () => {
  return (
    <ul className="dropdown">
      <li className="dropdown__item">
        <NavLink to="/tulle" className="dropdown__item-link">TÜLLƏR</NavLink>
      </li>
      <li className="dropdown__item">
        <NavLink to="/thick_curtains" className="dropdown__item-link">QALIN PƏRDƏLƏR</NavLink>
      </li>
      <li className="dropdown__item">
        <NavLink to="/subtle_blackout" className="dropdown__item-link">GÜNƏŞLİK</NavLink>
      </li>
      <li className="dropdown__item">
        <NavLink to="/blackout" className="dropdown__item-link">GÜNKEÇİRMƏZ</NavLink>
      </li>
      <li className="dropdown__item">
        <NavLink to="/peculiarities" className="dropdown__item-link">BİLGİLƏR</NavLink>
      </li>
    </ul>
  );
};

export default DropDownMenu;

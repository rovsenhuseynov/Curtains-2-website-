import React from "react";
import "./Header.scss";
import HeaderNav from "./HeaderNav/HeaderNav";
import Card from "./card/Card";


const Header = () => {
  return (
    <div className="header">
      <HeaderNav />
      <Card/>
    </div>
  );
};

export default Header;

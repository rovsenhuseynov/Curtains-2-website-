import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  // Кнопка для возвращения в верх страницы
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="nav">
      <div >
        <ul className="nav__list">
          <li className="nav__list-item">
            <NavLink
              className="current"
              to="/"
              data-hover="Home"
              onClick={scrollToTop}
            >
              ƏSAS&emsp;
            </NavLink>
          </li>

          <li className="nav__list-item">
            <NavLink to="curtains" data-hover=" Curtains" onClick={scrollToTop}>
            PƏRDƏLƏR
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink to="blinds" data-hover="Blinds" onClick={scrollToTop}>
              JALÜZLƏR
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink
              to="bedspreads"
              data-hover="Bedspreads"
              onClick={scrollToTop}
            >
               YATAQ ÖRTÜYÜ
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink
              to="accessories"
              data-hover="accessories"
              onClick={scrollToTop}
            >
              AKSESUARLAR
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

import React from "react";
import "./footer_menu.scss";
import { NavLink } from "react-router-dom";

function FooterMenu() {

  const scrollToTop = () => {

    window.scrollTo({   //будет выполнять прокрутку вверх страницы  
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="footer-menu">
      <NavLink to="advantages" onClick={scrollToTop}>    {/* будет выполнять прокрутку вверх страницы */}
        <div className="footer-menu__item footer-menu__services ">
          XİDMƏTLƏR
        </div>
      </NavLink>
      <NavLink to="CatalogSlider">
        <div className="footer-menu__item footer-menu__price-list ">
          MƏHSULLAR
        </div>
      </NavLink>
      <NavLink to="photo_gallery" onClick={scrollToTop} >
        <div className="footer-menu__item footer-menu__photo-gallery ">
          FOTO QALEREYA
        </div>
      </NavLink>
      
      <NavLink to="bonus" onClick={scrollToTop}>
        <div className="footer-menu__item footer-menu__promosyon ">
          PROMOSYON
        </div>
      </NavLink>

      <NavLink to="news" onClick={scrollToTop}>
        <div className="footer-menu__item footer-menu__articles ">
          MƏQALƏLƏR
        </div>
      </NavLink>
    </div>
  );
}

export default FooterMenu;

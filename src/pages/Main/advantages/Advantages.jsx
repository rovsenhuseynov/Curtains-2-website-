import React from "react";
import "./advantages.scss";
import Individual from "../../../assets/images/SVG_formats/advantages/Individual/Individual_FFF.svg";
import Range from "../../../assets/images/SVG_formats/advantages/Range/Range_FFF.svg";
import designer from "../../../assets/images/SVG_formats/advantages/designer/designer_FFF.svg";
import bonus from "../../../assets/images/SVG_formats/advantages/bonus/bonus_FFF.svg";
import { NavLink } from "react-router-dom";

function Advantages() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <div className="advantages">
      <div className="container">
        <h2 className="advantages_title">Üstünlüklər</h2>

        <div className="advantages-content">
          <div className="advantages-content__top advantages-content__blocks ">
            <div className="advantages-content__item">
              <NavLink
                to="#!"
                // onClick={scrollToTop}
                className="advantages-content__item-link"
              >
                <img
                  className="advantages-content__item-link-image"
                  src={Individual}
                  alt="Individual"
                />
              </NavLink>

              <div className="advantages-content__item-text">
                <div className="advantages-content__item-text-h3">
                  Sti̇li̇sti̇kanin müştəri̇ni̇n i̇stəkləri̇nə uyğunluğu
                </div>
                <div className="advantages-content__item-text-p">
                  Sifarişlə istənilən mürəkkəblikdə pərdələrin tikilməsi
                </div>
              </div>
            </div>

            <div className="advantages-content__item">
              <NavLink
                to="curtains"
                onClick={scrollToTop}
                className="advantages-content__item-link"
              >
                <img
                  className="advantages-content__item-link-image"
                  src={Range}
                  alt="Range"
                />
              </NavLink>

              <div className="advantages-content__item-text">
                <div className="advantages-content__item-text-h3">
                  Üstün tekstil keyfiyyəti
                </div>
                <div className="advantages-content__item-text-p">
                  Etibarlı istehsalçıların böyük və daim yenilənən seçimi
                </div>
              </div>
            </div>
          </div>

          <div className="advantages-content__bottom advantages-content__blocks">
            <div className="advantages-content__item">
              <NavLink
                to="#!"
                className="advantages-content__item-link"
              >
                <img
                  className="advantages-content__item-link-image"
                  src={designer}
                  alt="designer"
                />
              </NavLink>

              <div className="advantages-content__item-text">
                <div className="advantages-content__item-text-h3">
                  Pulsuz dizayner ziyarəti
                </div>
                <div className="advantages-content__item-text-p">
                  Dizayner evinizə və ya ofisinizə pərdə və ya karniz nümunələri
                  ilə gələcək
                </div>
              </div>
            </div>

            <div className="advantages-content__item">
              <NavLink
                to="bonus"
                onClick={scrollToTop}
                className="advantages-content__item-link"
              >
                <img
                  className="advantages-content__item-link-image"
                  src={bonus}
                  alt="designer"
                />
              </NavLink>

              <div className="advantages-content__item-text">
                <div className="advantages-content__item-text-h3">
                  Müştərilər üçün endirim sistemi
                </div>
                <div className="advantages-content__item-text-p">
                  Endirim kuponu, promosyonlar və hədiyyələr
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;


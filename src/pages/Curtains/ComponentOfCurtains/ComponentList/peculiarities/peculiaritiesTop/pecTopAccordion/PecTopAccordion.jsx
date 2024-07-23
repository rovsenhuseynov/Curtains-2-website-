import React, { useState, useEffect } from "react";
import "./pecTopAccordion.scss";
import { PeculiaritiesTop_Data } from "../PeculiaritiesTop_Data";
import close_line_black from "../../../../../../../assets/images/SVG_formats/close svg/close-line-red.svg";
import arrow_down from "../../../../../../../assets/images/SVG_formats/arrow-bottom/arrow-bottom_yellow.svg";

const PecTopAccordion = () => {
  const [isAccordion, setIsAccordion] = useState(false);
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsAccordion(windowWidth <= 1024);
      if (windowWidth <= 1024) {
        setActiveTab(null);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTab = (id) => {
    setActiveTab(activeTab === id ? null : id);
  };

  return (
    <div className="accordion">
      {isAccordion ? (
        <ul className="accordion__list">
          {PeculiaritiesTop_Data.map(({ id, title, text }) => (
            <li key={id} className="accordion__list-item">
              <button className="accordion__list-item-btn">{title}</button>

              <img
                src={arrow_down}
                alt=""
                onClick={() => toggleTab(id)}
                className={`arrow-icon ${activeTab === id ? "active" : ""}`}
              />

              {activeTab === id && (
                <>
                  <div
                    className="popup-overlay"
                    onClick={() => toggleTab(id)}
                  ></div>
                  <div className="popup">
                    <div className="popup-content">
                      <button
                        className="popup-content__btn-close"
                        onClick={() => toggleTab(id)}
                      >
                        <img src={close_line_black} alt="" />
                      </button>
                      <p className="context-tab__text">{text}</p>
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="on-wide-screens">
          {PeculiaritiesTop_Data.map(({ id, text }) => (
            <div key={id} className="on-wide-screens__block">
              <p className="on-wide-screens__block-text">{text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PecTopAccordion;

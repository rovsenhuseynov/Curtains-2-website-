import React, { useState } from "react";
import { SectionPlus_Data } from "./section_plus_Data";
import Popup from "./Popup";
import "./sectionPlus.scss";

function SectionPlus() {
  const [popupData, setPopupData] = useState(null);

  const openPopup = (data) => {
    setPopupData(data);
  };

  const closePopup = () => {
    setPopupData(null);
  };

  return (
    <div className="explanatory-images">
      <h1 className="explanatory-images__title">
        Pərdələrin hündürlüyünə aid məsləhətlər
      </h1>

      <div className="explanatory-images__group">
        {SectionPlus_Data.map((item, index) => (
          <div
            key={index}
            className={`explanatory-images__item ${
              item.size === "medium" ? "medium-image" : ""
            }`}
            onClick={() => openPopup(item)}
          >
            {item.image && (
              <>
                <img
                  src={item.image}
                  alt=""
                  className="explanatory-images__item-image popup-image"
                  loading="lazy"
                />

                <p className="explanatory-images__item-title">{item.title}</p>
              </>
            )}
          </div>
        ))}
      </div>

      {popupData && <Popup data={popupData} onClose={closePopup} />}
    </div>
  );
}

export default SectionPlus;

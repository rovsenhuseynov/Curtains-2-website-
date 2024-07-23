import React, { useState } from "react";
import "./thick-curtains.scss";
import Popup from "../Popup";
import { ThickCurtainData } from "./thick_Curtains_data";
import ThickParallax from "./ThickParallax";

const ThickCurtains = () => {
  const imagesPerGroup = 24;
  const [popupImage, setPopupImage] = useState(null);

  // Группировка изображений по размерам
  const groupedThickCurtainData = ThickCurtainData.reduce(
    (acc, item, index) => {
      const groupId = Math.floor(index / imagesPerGroup);
      acc[groupId] = acc[groupId] || [];
      acc[groupId].push(item);
      return acc;
    },
    {}
  );

  const openPopup = (image) => {
    setPopupImage(image);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <div className="thick-curtains">
      <div className="thick-curtains__header-bgr">
        <ThickParallax />
      </div>
      <div className="container">
        <div className="thick-curtains__flex">
          {Object.keys(groupedThickCurtainData).map((groupId) => {
            const group = groupedThickCurtainData[groupId];

            return (
              <div key={groupId} className="thick-curtains__group">
                {group.slice(0, imagesPerGroup).map((service) => (
                  <div
                    key={service.id}
                    className={`thick-curtains__img-wrapper ${
                      service.size === "medium" ? "medium-image" : ""
                    }`}
                    onClick={() => openPopup(service.image)}
                  >
                    {service.image && (
                      <img
                        src={service.image}
                        alt=""
                        className="thick-curtains__item-image popup-image"
                        loading="lazy"
                      />
                    )}
                    <p className="thick-curtains__item-title">
                      {service.title}
                    </p>
                    <p className="thick-curtains__item-sub-text">
                      {service.text}
                    </p>
                  </div>
                ))}
                {Array.from({ length: imagesPerGroup - group.length }).map(
                  (_, index) => (
                    <div
                      key={`placeholder-${groupId}-${index}`}
                      className="thick-curtains__img-wrapper placeholder"
                    />
                  )
                )}
              </div>
            );
          })}
        </div>
      </div>

      {popupImage && <Popup image={popupImage} onClose={closePopup} />}
    </div>
  );
};

export default ThickCurtains;

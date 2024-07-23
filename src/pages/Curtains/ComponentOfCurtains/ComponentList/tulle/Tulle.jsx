import React, { useState } from "react";
import "./tulle.scss";
import Popup from "../Popup";
import { tulleData } from "./tulle_data";
import TulleParallax from "./TulleParallax";

function Tulle() {
  const imagesPerGroup = 24;
  const [popupImage, setPopupImage] = useState(null);

  // Группировка изображений по размерам
  const groupedTulleData = tulleData.reduce((acc, item, index) => {
    const groupId = Math.floor(index / imagesPerGroup);
    acc[groupId] = acc[groupId] || [];
    acc[groupId].push(item);
    return acc;
  }, {});

  const openPopup = (image) => {
    setPopupImage(image);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <div className="tulle-catalog">
      <div className="tulle-catalog__header-bgr">
        <TulleParallax />
      </div>

      <div className="container">
        <div className="tulle-catalog__flex">
          {Object.keys(groupedTulleData).map((groupId) => {
            const group = groupedTulleData[groupId];

            return (
              <div key={groupId} className="tulle-catalog__group">
                {group.slice(0, imagesPerGroup).map((service) => (
                  <div
                    key={service.id}
                    className={`tulle-catalog__img-wrapper ${
                      service.size === "medium" ? "medium-image" : ""
                    }`}
                    onClick={() => openPopup(service.image)}
                  >
                    {service.image && (
                      <img
                        src={service.image}
                        alt=""
                        className="tulle-catalog__item-image popup-image"
                        loading="lazy"
                      />
                    )}
                    <p className="tulle-catalog__item-title">{service.title}</p>
                  </div>
                ))}
                {Array.from({ length: imagesPerGroup - group.length }).map(
                  (_, index) => (
                    <div
                      key={`placeholder-${groupId}-${index}`}
                      className="tulle-catalog__img-wrapper placeholder"
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
}

export default Tulle;

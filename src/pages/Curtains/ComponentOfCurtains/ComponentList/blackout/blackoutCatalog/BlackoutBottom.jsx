import React, { useState } from "react";
import "./blackout-bottom.scss";
import Popup from "./Popup";
import { GalleryData } from "./Blackout_GalleryData";

function BlackoutBottom() {
  const imagesPerGroup = 24;
  const [popupImage, setPopupImage] = useState(null);

  // Группировка изображений по размерам
  const groupedGalleryData = GalleryData.reduce((acc, item, index) => {
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
    <div className="blackout-catalog">
      <h1 className="blackout-catalog__title">Blackout kataloqu</h1>

      <div className="blackout-catalog__groups">
        {Object.keys(groupedGalleryData).map((groupId) => (
          <div key={groupId} className="blackout-catalog__group">
            {groupedGalleryData[groupId].map((item, index) => (
              <div
                key={`${groupId}-${index}`}
                className={`blackout-catalog__item ${
                  item.size === "medium" ? "medium-image" : ""
                }`}
                onClick={() => openPopup(item.image)}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt=""
                    className="blackout-catalog__item-image popup-image"
                    loading="lazy"
                  />
                )}
                <p className="blackout-catalog__item-title">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {popupImage && <Popup image={popupImage} onClose={closePopup} />}
    </div>
  );
}

export default BlackoutBottom;

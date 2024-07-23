import React, { useState } from "react";
import "./blackout-bottom.scss";
import { GalleryData } from "./GalleryData";
import buttonClose from "../../../../../../assets/Images/svg/close svg/close-small.svg";

function BlackoutBottom() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Объявляем переменную selectedItem

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={`blackout-bottom ${modalOpen ? "modal-open" : ""}`}>
      {modalOpen && selectedItem && (
        <div className="model">

          <div className="desc-img-wrapper">
          <img
            src={buttonClose}
            alt="svg"
            className="close"
            onClick={closeModal}
          />
            <img src={selectedItem.image} alt="img" className="images" />
            <div className="description">{selectedItem.description}</div>

          </div>
        </div>
      )}

      <div className="content-container">
        <div className="blackout-bottom__text">
          İnteryerinizə zərif pərdələrlə gözəl görünüş yaratmaq üçün sərfəli
          qiymətlərlə geniş çeşiddə qarartma(blackout) pərdələr təklif edirik.
        </div>

        <div className="blackout-bottom__gallery">
          {GalleryData.map((item, index) => (
            <div className="pics" key={index} onClick={() => openModal(item)}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlackoutBottom;

import React from "react";
// import "./tulle/tulle.scss";
// import "./thick_Curtains/thick-curtains.scss";

function Popup({ image, onClose }) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content">
        <img
          src={image}
          alt="window tulle"
          className="popup-image"
          onClick={(e) => e.stopPropagation()}
        />
        <button className="popup-close-button" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}
export default Popup;

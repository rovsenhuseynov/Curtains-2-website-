// import React from "react";

// function Popup({ image, onClose }) {
//   return (
//     <div className="popup-overlay" onClick={onClose}>
//       <div className="popup-content">
//         <img
//           src={image}
//           alt="window tulle"
//           className="popup-image"
//           onClick={(e) => e.stopPropagation()}
//         />
//         <button className="popup-close-button" onClick={onClose}>
//           &times;
//         </button>
//       </div>
//     </div>
//   );
// }
// export default Popup;



import React from "react";

function Popup({ data, onClose }) {
  const { image, description } = data;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content">
        <img
          src={image}
          alt="window tulle"
          className="popup-image"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="popup-description">{description}</div>
        <button className="popup-close-button" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}

export default Popup;
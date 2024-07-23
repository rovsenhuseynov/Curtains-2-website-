import React from "react";
import './button-left.scss'
import arrow_left from "../../../assets/images/SVG_formats/prev-1.svg";

function ButtonLeft({ onClick, isStartOfList, extraClass, hide  }) {
  return (
    <div className={`scrollToLeft ${extraClass}`}>
      <button className="scrollToLeft__button" onClick={onClick}>
        <img
          src={arrow_left}
          alt="arrow-top"
          className={`scrollToLeft__button-prev ${isStartOfList ? 'start-of-list' : ''}`}
        />
      </button>
    </div>
  );
}

export default ButtonLeft;



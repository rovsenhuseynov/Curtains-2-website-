import React from "react";
import "./button-right.scss";
import arrow_right from "../../../assets/images/SVG_formats/next-1.svg";

function ButtonRight({ onClick, isEndOfList, hide  }) {
  const buttonNextClassName = `scrollToRight__button-next${
    isEndOfList ? " end-of-list" : ""
  }`;

  return (
    <div className="scrollToRight">
      <button className="scrollToRight__button" onClick={onClick}>
        <img
          src={arrow_right}
          alt="arrow-next"
          className={buttonNextClassName}
        />
      </button>
    </div>
  );
}

export default ButtonRight;

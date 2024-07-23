import React from "react";
import "./blackout.scss";
import BlackoutTop from "./blackoutTop/BlackoutTop";
import BlackoutMid from "./blackoutMid/BlackoutMid";
import BlackoutBottom from "./blackoutCatalog/BlackoutBottom";
import BlackoutParallax from "./BlackoutParallax";

const Blackout = () => {
  return (
    <div className="blackout">
      <div className="container">
        <div className="blackout__header-bgr">
          <BlackoutParallax />
        </div>

        <div className="blackout__content">
          <BlackoutTop />
          <div className="blackout__content-line1"></div>
          <BlackoutMid />
          <BlackoutBottom />
        </div>
      </div>
      <div className="blackout__content-line2"></div>
    </div>
  );
};

export default Blackout;

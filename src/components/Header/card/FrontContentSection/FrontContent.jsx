import React from "react";
import "./frontContent.scss";

function FrontContent() {
  return (
    <div className="front-content">
      <div className="front-content__inner-container">
        <div className="front-content__image-in-css"></div>
        <div className="front-content__text">
          <div className="front-content__text-title">
            <h2 className="text-title-2A">
              Pərdə, jalüz və yataq örtükləri; hazırı və hazırlanması.
            </h2>
            <h2 className="text-title-1">Ev-Tekstil</h2>
            <h5 className="text-title-2A">business card website</h5>
            <div className="barcode-text-style">
              <h4 className="text-title-2">TENGIZ-WEBSITE</h4>
              <h4 className="text-title-2B">TENGIZ-WEBSITE</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontContent;

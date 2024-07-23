
import React, { useState } from "react";
import "./section_bottom.scss";
import { GalleryData } from "./section_bottom_Data";
import buttonClose from "../../../../../../assets/images/SVG_formats/close svg/close-small.svg";

function SectionBottom() {
  const [modalOpen, setModalOpen] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [tempDescription, setTempDescription] = useState("");

  const getImg = (image, description) => {
    setTempImgSrc(image);
    setTempDescription(description);
    setModalOpen(true);
  };

  const closeModel = () => {
    setModalOpen(false);
  };

  return (
    <div className={`pecs-bottom ${modalOpen ? "modal-open" : ""}`}>
      {modalOpen && (
        <div className="model">
          <div className="photos-wrapper">
            <img src={tempImgSrc} alt="img" className="photos" />
            <p className="modal-description">{tempDescription}</p>
          </div>

          <img
            src={buttonClose}
            alt="svg"
            className="close"
            onClick={closeModel}
          />
        </div>
      )}

      <div className="pecs-bottom__content">
        <h3 className="pecs-bottom__content-title">
          Pərdələr sifariş edərkən, materialın həcminin istehlakına və son
          məhsulun gözəlliyinə birbaşa təsir edən - qıvrımların növünün və sıxlığınin seçimi
          mühüm rol oynayır ?
        </h3>

        <div className="pecs-bottom__content-gallery">
          {GalleryData.map((item, index) => (
            <div
              className="pecs-bottom__content-gallery-images"
              key={index}
              onClick={() => getImg(item.image, item.description)}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100%" }}
                className="pecs-bottom__content-gallery-images-img"
              />
              <div
                className="pecs-bottom__content-gallery-images-title"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionBottom;

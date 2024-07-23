import React from "react";
import "./section_mid.scss";
import { ImageLinks, SectionTop_Data_2 } from "./section_mid_Data";

function SectionMid() {
  const selectedImageId = 25; // Замените на нужный вам id
  const selectedImage = ImageLinks.find(
    (image) => image.id === selectedImageId
  );

  return (
    <div className="section_mid">
      <h3 className="section_mid__title">
        Pərdə seçərkən ən çox yayqin səhvlər
      </h3>

      <div className="section_mid__context">
        <div className="section_mid__context-image_block">
          {selectedImage && (
            <img
              key={selectedImage.id}
              className="section_mid__context-image_block-img"
              src={selectedImage.ImageLink}
              alt={`foto ${selectedImageId}`}
            />
          )}
        </div>
        <ul className="section_mid__context-text_block">
          {SectionTop_Data_2.map(({ id, text }) => (
            <li key={id} className="section_mid__context-text_block-text">
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SectionMid;

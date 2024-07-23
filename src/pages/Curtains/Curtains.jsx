import React from "react";
import CurtainsParallax from "./curtains_parallax/CurtainsParallax";
import CurtainCatalog from "./ComponentOfCurtains/CurtainCatalog";
import PhotoGallery from "./curtains_photo_gallery/PhotoGallery";
import CurtainsTop from "./CurtainsTop/CurtainsTop";
import "./curtains.scss"

const Curtains = () => {
  return (
    <div className="curtains">
      <CurtainsTop/>
      <CurtainsParallax />
      <PhotoGallery />
      <CurtainCatalog />
    </div>
  );
};

export default Curtains;

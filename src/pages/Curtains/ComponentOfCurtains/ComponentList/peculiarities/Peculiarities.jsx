import React from "react";
import "./peculiarities.scss";
import SectionMid from "./sectionMid/SectionMid";
import SectionBottom from "./sectionBottom/SectionBottom";
import SectionPlus from "./sectionPlus/BlackoutBottom";
import PeculiaritiesTop from "./peculiaritiesTop/PeculiaritiesTop";


const Peculiarities = () => {
  return (
    <div className="peculiarities">
      <div className="container">
        <h3 className="peculiarities__title">
          Pərdələr sifariş edərkən tez-tez buraxılan səhflər və nəzərə alınmalı
          özəlliklər
        </h3>
        <div className="peculiarities__sections">
          <PeculiaritiesTop />
          <div className="blackout__content-line1"></div>
          <SectionMid />
          <div className="blackout__content-line1"></div>
          <SectionPlus />
          <div className="blackout__content-line1"></div>
          <SectionBottom />
        </div>
      </div>
    </div>
  );
};

export default Peculiarities;

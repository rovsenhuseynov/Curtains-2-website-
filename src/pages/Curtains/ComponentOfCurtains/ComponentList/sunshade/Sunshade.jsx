import React from "react";
import "./sunshade.scss";
import SunshadeBlock1 from "./sunshade_block_1/SunshadeBlock1";
import SunshadeBlock2 from "./sunshade_block_2/SunshadeBlock2";
import SunshadeFinal from "./sunshade_final/SunshadeFinal";
import SunshadeParallax from "./SunshadeParallax";

const Sunshade = () => {
  return (
    <div className="sunshade">
      <div className="sunshade__header-bgr">
        <SunshadeParallax/>
      </div>

      <div className="container">
        <div className="sunshade-content">
          <SunshadeBlock1 />

          <div className="sunshade-content-line1"></div>

          <SunshadeBlock2 />

          <div className="sunshade-content-line1"></div>

          <SunshadeFinal />
        </div>
      </div>

    </div>
  );
};

export default Sunshade;

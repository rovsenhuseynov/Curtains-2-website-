import React from "react";
import "./sunshadeBlock_2.scss";
import sunshade_6 from "../../../../../../assets/images/sunshade_img/sunshade_6.webp";
import sunshade_colors from "../../../../../../assets/images/sunshade_img/sunshade_4.webp";

function SunshadeBlock2() {
  return (
    <div className="sunshade__block2">
      <div className="sunshade__block2-left">
        <p className="sunshade__block2-left-p">
        Günəşliklərin əsas rəngləri ağ və kremdir,
          əgər onları düzgün ayarlasanız, günəşliklər tülləri günəş işığından
          qorunmaqla yanaşı, daha cəlbedici görünüş də qazandıracaq!
        </p>

        <img
          src={sunshade_colors}
          alt="günəşlik"
          className="sunshade__block2-left-image"
        />
      </div>

      <img
        src={sunshade_6}
        alt="günəşlik"
        className="sunshade__block2-image"
      />
    </div>
  );
}

export default SunshadeBlock2;

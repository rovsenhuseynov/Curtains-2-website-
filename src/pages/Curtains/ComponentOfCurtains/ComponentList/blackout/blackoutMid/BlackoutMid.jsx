import React from "react";
import "./blackout-mid.scss";
import blackout_img1 from "../../../../../../assets/images/blackout/Blackout-2.jpg";
import blackout_img2 from "../../../../../../assets/images/blackout/Blackout-2.webp";

function BlackoutMid() {
  return (
    <div className="blackout_mid">
      <div className="blackout_mid__block1">
        <ul className="blackout_mid__block1-texts">
          <li className="blackout_mid__block1-texts-content ">
            Qarartma(blackout) pərdələrin kətan və ya düz kimi əsas növləri
            vardır. Onların tək bir fərqi yalnız görünüşlərindədir.
          </li>
        </ul>

        <img
          src={blackout_img1}
          alt="blackout"
          className="blackout_mid__block1-image"
        />
      </div>

      <div className="blackout_mid__block2">
        <ul className="blackout_mid__block2-texts">
          <li className="blackout_mid__block2-texts-content ">
            Qarartma pərdələr müxtəlif parçalardan və fərqli rənglərdə hazırlana
            bildiyi üçün fon pərdəsi kimi də istifadə edilə bilər.
          </li>
        </ul>

        <img
          src={blackout_img2}
          alt="günəşlik"
          className="blackout_mid__block2-image"
        />
      </div>
    </div>
  );
}

export default BlackoutMid;

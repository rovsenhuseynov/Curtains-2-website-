import React from "react";
import "./sunshade_final.scss";
import sunshade_1 from "../../../../../../assets/images/sunshade_img/sunshade_1.jpg";
import sunshade_2 from "../../../../../../assets/images/sunshade_img/sunshade_2.webp";
import sunshade_8 from "../../../../../../assets/images/sunshade_img/sunshade_3.jpg";

function SunshadeFinal() {
  return (
    <div className="sunshade__final_block">
      <h2 className="sunshade__final_block-title">
        Günəşlikləri seçməyə qərar verdiyinizdə, bizdə sizin üçün tələb
        etdiyiniz keyfiyyəti tapa bilərsiniz. Bu ifadə ilə, günlük yaşantınız
        üçün ideal güneşlikləri təklif etdiyimizi vurğulayırıq.
      </h2>

      <div className="sunshade__final_block-images">
        <img
          src={sunshade_1}
          alt="güneşlik perde"
          className="sunshade__final_block-images-img "
        />
        <img
          src={sunshade_2}
          alt="güneşlik perde"
          className="sunshade__final_block-images-img"
        />
        <img
          src={sunshade_8}
          alt="güneşlik perde"
          className="sunshade__final_block-images-img"
        />
      </div>
    </div>
  );
}

export default SunshadeFinal;

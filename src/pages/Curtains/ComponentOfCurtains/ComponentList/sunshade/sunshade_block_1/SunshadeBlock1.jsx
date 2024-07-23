import React from "react";
import "./sunshadeBlock_1.scss";
import sun from "../../../../../../assets/images/sunshade_img/sun.webp";

function SunshadeBlock1() {
  return (
    <div className="sunshade__block1">
      <div className="sunshade__block1-texts">
        <ul className="sunshade__block1-texts-lists">
          <li className="sunshade__block1-texts-lists-item ">
            Günəş işığına oyanmağı xoşlamırsınız?
          </li>

          <li className="sunshade__block1-texts-lists-item ">
            Pərdələri, tülü və daxili interyeri solğunlaşmaqdan qorumaq
            istəyirsiniz ?
          </li>

          <li className="sunshade__block1-texts-lists-item">
            O zaman sizə günəşlik lazımdır !
          </li>
        </ul>

        <h3 className="sunshade__block1-texts-h3">Güneşlik Pərdə Nədir ?</h3>

        <p className="sunshade__block1-texts-p">
          Günəş pərdəsi və ya sadəcə günəşlik adlanan bu pərdə adını öz
          funksiyasına görə almışdır. Kölgə effekti ilə günəş şüalarının isti və
          işığını qismən və ya tamamilə kəsir. Günəşlik ümumiyyətlə tül
          pərdələrlə birlikdə istifadə olunur. Bundan əlavə, tək başına da
          istifadə edilə bilər. Günəşliklərin istifadə sahələri kifayət qədər
          genişdirı; Evlərdə, ofislərdə, restoranlarda, ictimai binalarda və s.
        </p>
      </div>
      <img src={sun} alt="günəşlik" className="sunshade__block1-image" />
    </div>
  );
}

export default SunshadeBlock1;

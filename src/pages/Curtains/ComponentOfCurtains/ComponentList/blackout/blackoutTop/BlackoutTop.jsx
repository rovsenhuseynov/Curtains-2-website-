import React from "react";
import "./blackout-top.scss";
import blackout_img1 from "../../../../../../assets/images/blackout/Blackout-1.jpg";

function BlackoutTop() {
  return (
    <div className="blackout_top">
      <div className="blackout_top-texts">
        <ul className="blackout_top-texts-lists">
          <li className="blackout_top-texts-lists-item ">
            Günəşli otaq, parlaq interyer dizayn kataloqları üçün qalib
            variantdır. Ancaq gündəlik həyat üçün parlaq və qızmar günəş şüaları
            narahatlığa səbəb ola bilər.
          </li>
        </ul>

        <h3 className="blackout_top-texts-h3">
          Qarartma(Blackout) pərdə nədir və nəyə gərəkdir ?
        </h3>

        <p className="blackout_top-texts-p">
          Yuxu keyfiyyəti üçün qaranlıq və sakit mühit çox vacibdir. Qarartma
          pərdə adından da göründüyü kimi, qalınlığı,sıxlığı və arxa tərəfə
          əlavə edilən xüsusi təbəqə sayəsində işığı demək olar ki, tamamilə
          kəsə bilən və otağı qaranlıq edən pərdə növüdür. Əsasən yataq, media
          və iş otaqlarında üstünlük verilən bu pərdələr işıq nəzarətini təmin
          etməklə yanaşı, əlavə olaraq temperatur və səs izolyasiyası kimi
          üstünlüklər də təqdim edir.
        </p>
      </div>
      <img
        src={blackout_img1}
        alt="günəşlik"
        className="blackout_top-image"
      />
    </div>
  );
}

export default BlackoutTop;

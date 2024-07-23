import React from "react";
import "./Blinds.scss";
import blinds_1 from "../../assets/images/photo_gallery/pictures of blinds/blinds_4.webp";
import BlindsGallery from "./blindsPhotoGallery/BlindsGallery";
import Measurements from "./windowMeasurements/Measurements";

function Blinds() {
  return (
    <div className="blinds">
      <div className="container">
        <div className="blinds-wrapper">
          <h2 className="blinds-wrapper__title">
            Pəncərələr &nbsp; üçün hansı jalyüzlər seçmək lazımdır?
          </h2>
          <section className="about-blinds">
            <div className="about-blinds__contecst">
              <p className="about-blinds__text">
                Müasir dünyada jalyüzlər ofis həyatının atributlarından
                mənzillərin və evlərin dizaynının əsas məqamına çevrildi. Geniş
                çeşiddə modellər, dizaynlar və heyrətamiz rənglər pəncərə
                açılışlarınızı lazımi şəkildə bəzəməyə imkan verir.Artıq bu tip
                günəş qoruyucu sistemlər adi pərdələrlə rəqabət aparır. Bu günkü
                gün jalyüz seçmək çətin bir iş ola bilər. Üfüqi və ya şaquli;
                roller və ya qatlı jalyüzlər, hansını seçəsən ?. Kömək üçün
                əməkdaşlarımızla əlaqə saxlamağı təklif edirik.  Biz isə
                pəncərələriniz üçün jalüz istehsal etmək üçün müştərinin bütün
                istəklərini mümkün qədər həyata keçirməyə çalışacağıq.
              </p>

              <img
                src={blinds_1}
                alt="blinds_1"
                className="about-blinds__image"
              />
            </div>
          </section>
        </div>
       <BlindsGallery/>
       <Measurements/>
      </div>
    </div>
  );
}

export default Blinds;

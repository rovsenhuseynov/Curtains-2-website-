import React from "react";
import "./hero_section.scss";
import SliderSwiper from "./sliderSwiper/SliderSwiper";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section-container">  

        <div className="main-top">
          <h2 className="main-top__title-h2">Bizim Fəaliyyətlərimiz</h2>
          <p className="main-top__text">
            Burada unikal interyer yaratmaq və mənzilinizin funksionallığını
            yaxşılaşdırmaq üçün lazım olan hər şeyi tapa bilərsiniz. Layihənin
            ölçüsündən asılı olmayaraq, biz yüksək keyfiyyət standartlarına nail
            olmaq və bütün ehtiyaclarınızı ödəmək öhdəliyi götürürük.
          </p>
        </div>
        
        <SliderSwiper />

      </div>
    </section>
  );
}

export default HeroSection;

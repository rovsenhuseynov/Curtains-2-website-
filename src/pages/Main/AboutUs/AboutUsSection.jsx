import React from "react";
import "./About_section.scss";
import salon_curtains from "../../../assets/images/WEBP_formats/curtains_5.webp";
import salon_curtains_2 from "../../../assets/images/WEBP_formats/curtains_222.webp";
import { NavLink } from "react-router-dom";

function AboutUsSection() {
  return (
    <section className="about">
      <div className="container">
        <h2 className="about__title">Bir az bizim haqqımızda</h2>
        <div className="about__blocks">
          <div className="about__blocks-left">
            <h4 className="about__blocks-left-top">Pərdə tikişi sektorunda</h4>
            <h2 className="about__blocks-left-middle">25+</h2>
            <h4 className="about__blocks-left-bottom">illik təcrübə</h4>
            <img
              src={salon_curtains}
              alt="curtain-img"
              className="about__blocks-left-img"
            />
          </div>

          <div className="about__blocks-median">
            <div className="about__blocks-median-blur">
              <p className="about__blocks-median-blur-p">
                Sifarişlə pərdələrin tikilməsi və satışı ilə məşğul olan bir
                qrupuq. Biz işimizi keyfiyyətli və gözəl pərdələrə artan
                tələbata cavab olaraq qurduq. Məqsədimiz müştərilərimizə fərdi
                yanaşma təqdim etmək və onlara evləri üçün rahat və dəbli
                interyer yaratmağa kömək etməkdir. Qrupumuz geniş çeşiddə
                parçalar və komponentlərdən istifadə etməklə klassikdən tutmuş
                müasir dizayna qədər bütün növ və üslubda pərdələrin tikilməsi
                ilə məşğuldur. Müştərilərimizə evlərində ideal interyer dizaynı
                və əhval-ruhiyyə yaratmaq üçün tam paket təqdim etmək üçün ölçü,
                quraşdırma və dizayn üzrə məsləhət xidmətləri də təklif edirik.
              </p>
            </div>

            <NavLink to="#!" className="about__blocks-median-link">
              <h6 className="about__blocks-median-link-more">Daha ətraflı</h6>
            </NavLink>
          </div>

          <div className="about__block-right">
            <img
              src={salon_curtains_2}
              alt="Pərdə modelləri"
              className="about__block-right-img"
            />
            <h2 className="about__block-right-h2">2 000 &gt; </h2>
            <h5 className="about__block-right-h3">tamamlanmış layihələr</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;

import React, { useState, useEffect, useRef } from "react";
import { services } from "./curtains_catalog";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./catalog_slider.scss";
import { Navigation, Pagination, A11y, EffectFade } from "swiper/modules";
import ButtonLeft from "../../../../reusable/button/button-left/ButtonLeft";
import ButtonRight from "../../../../reusable/button/button-right/ButtonRight";

const CatalogSlider = () => {
  const swiperRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  function getSlidesToShow() {
    if (window.innerWidth <= 540) {
      return 1;
    } else if (window.innerWidth <= 950) {
      return 2;
    } else {
      return 3;
    }
  }

  const handleLeftButtonClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleRightButtonClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.update();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderSlider = () => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    return (
      <>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, A11y, EffectFade]}
          slidesPerView={slidesToShow}
          spaceBetween={30}
          navigation={{
            nextEl: false,
            prevEl: false,
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="swiper-catalog__item">
              <NavLink
                to={service.path}
                className="swiper-catalog__item-link"
                onClick={scrollToTop}
              >
                <img
                  src={service.image}
                  alt={`Slide ${index + 1}`}
                  className="swiper-catalog__item-img"
                />
                <div className="swiper-catalog__item-line"></div>
                <h4 className="swiper-catalog__item-title">{service.title}</h4>
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="scrollers">
          <ButtonLeft onClick={handleLeftButtonClick} />
          <ButtonRight onClick={handleRightButtonClick} />
        </div>
      </>
    );
  };
  return renderSlider();
};

export default CatalogSlider;

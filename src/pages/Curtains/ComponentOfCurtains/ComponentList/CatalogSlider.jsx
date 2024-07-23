import React, { useState, useEffect, useRef } from "react";
import { services } from "./curtains_catalog";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./catalog_slider.scss";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import ButtonLeft from "../../../../reusable/button/button-left/ButtonLeft";
import ButtonRight from "../../../../reusable/button/button-right/ButtonRight";

const CatalogSlider = () => {
  const swiperRef = useRef(null);
  const [isStartOfList, setIsStartOfList] = useState(true);
  const [isEndOfList, setIsEndOfList] = useState(false);
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

  const handleSwiperUpdate = (swiper) => {
    const { isBeginning, isEnd } = swiper;
    setIsStartOfList(isBeginning);
    setIsEndOfList(isEnd);
  };

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

  const handleSlideChange = (swiperInstance) => {
    if (swiperInstance) {
      setIsStartOfList(swiperInstance.isBeginning);
      setIsEndOfList(swiperInstance.isEnd);
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
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          slidesPerView={slidesToShow}
          spaceBetween={30}
          navigation={{
            nextEl: false,
            prevEl: false,
          }}
          scrollbar={{ draggable: true }}
          onSwiper={handleSwiperUpdate}
          initialSlide={0}
          onSlideChange={() => handleSlideChange(swiperRef.current?.swiper)}
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
          <ButtonLeft
            onClick={handleLeftButtonClick}
            isStartOfList={isStartOfList}
          />
          <ButtonRight
            onClick={handleRightButtonClick}
            isEndOfList={isEndOfList}
          />
        </div>
      </>
    );
  };
  return renderSlider();
};

export default CatalogSlider;



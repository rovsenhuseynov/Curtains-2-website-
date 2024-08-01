import React, { useState, useEffect, useRef } from "react";
import { services } from "../../heroSection/servicesData";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./slider_swiper.scss";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import ButtonLeft from "../../../../reusable/button/button-left/ButtonLeft";
import ButtonRight from "../../../../reusable/button/button-right/ButtonRight";

const SliderSwiper = () => {
  const swiperRef = useRef(null);
  const [isStartOfList, setIsStartOfList] = useState(true);
  const [isEndOfList, setIsEndOfList] = useState(false);

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

  const [isSlider, setIsSlider] = useState(window.innerWidth <= 1100);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsSlider(window.innerWidth <= 1100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderSlider = () => {
    const slidesToShow = windowWidth <= 700 ? 1 : 2;

    return (
      <>
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          slidesPerView={slidesToShow}
          spaceBetween={25}
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
            <SwiperSlide key={index} className="main-bottom__item">
              <NavLink to={service.path} className="main-bottom__item-top">
                <img
                  src={service.image}
                  alt={`Slide ${index + 1}`}
                  className="main-bottom__item-top-img"
                />
                <h3 className="main-bottom__item-top-h3">{service.title}</h3>
              </NavLink>
              <div className="main-bottom__line"></div>
              <div className="main-bottom__item-bottom">
                <p className="main-bottom__item-bottom-text">
                  {service.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="button-scrollers">
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

  const handleSlideChange = (swiperInstance) => {
    if (swiperInstance) {
      setIsStartOfList(swiperInstance.isBeginning);
      setIsEndOfList(swiperInstance.isEnd);
    }
  };

  const renderGrid = () => {
    return (
      
      <div className="main-bottom">
        {services.map((service, index) => (
          <NavLink to={service.path} key={index} className="main-bottom__item">
            <div className="main-bottom__item-top">
              <img
                src={service.image}
                alt={`Slide ${index + 1}`}
                className="main-bottom__item-top-img"
              />
              <h5 className="main-bottom__item-top-h5">{service.title}</h5>
              <div className="main-bottom__line"></div>
              <div className="main-bottom__item-bottom">
                <p className="main-bottom__item-bottom-text">
                  {service.description}
                </p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    );
  };

  return isSlider ? renderSlider() : renderGrid();
};

export default SliderSwiper;

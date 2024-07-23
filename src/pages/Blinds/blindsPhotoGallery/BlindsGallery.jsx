import React, { useState, useEffect } from "react";
import SwiperComponent from "../../../reusable/swiperComponent/SwiperComponent";
import ButtonLeft from "../../../reusable/button/button-left/ButtonLeft";
import ButtonRight from "../../../reusable/button/button-right/ButtonRight";
import { slideData } from "./slide_Data";
import "./blinds_gallery.scss";

const BlindsGallery = () => {
  const [swiper, setSwiper] = useState(null);
  const [isStartOfList, setIsStartOfList] = useState(true);
  const [isEndOfList, setIsEndOfList] = useState(false);
  const [singleSlideMode, setSingleSlideMode] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  const getSlidesPerView = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1200) {
      return 3;
    } else if (windowWidth >= 700) {
      return 2;
    } else {
      return 1;
    }
  };

  const handleSwiperUpdate = (swiper) => {
    setSwiper(swiper);
    const { isBeginning, isEnd } = swiper;
    setIsStartOfList(isBeginning);
    setIsEndOfList(isEnd);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (swiper) {
      swiper.update();
      swiper.slideTo(selectedSlideIndex, 0, false);
    }
  }, [isZoomed, selectedSlideIndex, windowSize, swiper]);

  const handleLeftButtonClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleRightButtonClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handleSlideClick = (index) => {
    setSingleSlideMode(true);
    setSelectedSlideIndex(index);
    setIsZoomed(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseButtonClick = () => {
    setSingleSlideMode(false);
    setIsZoomed(false);
    document.body.style.overflow = "auto";
    document.body.style.overflowX = "hidden";
  };

  const renderZoomedImage = () => {
    if (!isZoomed) return null;

    const selectedImage = slideData[selectedSlideIndex];

    return (
      <div className="fullscreen-overlay">
        <div
          className="fullscreen-image-container"
          onClick={handleCloseButtonClick}
        >
          <img
            src={selectedImage.image}
            alt={`Slide ${selectedSlideIndex + 1}`}
            className="fullscreen-image"
            loading="lazy"
          />
          <div className="zoom-out-icon" onClick={handleCloseButtonClick}></div>
          
          <div className="description-container">
            <p className="description-text">{selectedImage.description}</p>
          </div>

        </div>
      </div>
    );
  };

  return (
    <section
      className={`blinds-gallery ${singleSlideMode ? "single-slide-mode" : ""}`}
    >
      <div className="blinds-inner-container">
        <h2 className="blinds-gallery__title">Jalüz modelləri qalereyası</h2>
        <p className="blinds-gallery__text">
          Bizdə İstənilən növ jalyüz sistemlərinin istehsalını və
          quraşdırılmasını sifariş edə bilərsiniz.
        </p>
        <div className="blinds-gallery__container">
          {renderZoomedImage()}
          {!singleSlideMode && (
            <SwiperComponent
              slideData={slideData}
              selectedSlideIndex={selectedSlideIndex}
              handleSlideClick={handleSlideClick}
              handleSwiperUpdate={handleSwiperUpdate}
              swiper={swiper}
              singleSlideMode={singleSlideMode}
              getSlidesPerView={getSlidesPerView}
            />
          )}
        </div>
        {!isZoomed && (
          <div className="blinds-gallery__control-block-prev">
            <ButtonLeft
              onClick={handleLeftButtonClick}
              isStartOfList={isStartOfList}
            />
            <ButtonRight
              onClick={handleRightButtonClick}
              isEndOfList={isEndOfList}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default BlindsGallery;

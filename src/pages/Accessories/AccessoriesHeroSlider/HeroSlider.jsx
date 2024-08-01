import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import "./HeroSlider.scss";
import slideData from "./slideData";

const HeroSlider = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      const flkty = new Flickity(carouselRef.current, {
        accessibility: true,
        prevNextButtons: true,
        pageDots: true,
        setGallerySize: false,
      });

      flkty.on("scroll", function () {
        flkty.slides.forEach(function (slide, i) {
          const image =
            carouselRef.current.querySelectorAll(".carousel-cell")[i];
          const x = (slide.target + flkty.x) * -0.3; // Параллакс
          image.style.backgroundPosition = `${x}px center`;
        });
      });

      return () => {
        flkty.destroy();
      };
    }
  }, []);

  return (
    <div className="hero-slider" ref={carouselRef}>
      {slideData.map((slide, index) => (
        <div
          className="carousel-cell"
          key={index}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="inner">
            <h3 className="subtitle">{slide.subtitle}</h3>
            <h2 className="title">{slide.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;


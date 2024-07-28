import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import "./ParallaxComponentX.scss";

const ParallaxComponentX = ({
  backgroundImage,
  title,
  text,
  alignItems,
  parallaxSpeed = 1,
  parallaxHeight = 1,
  parallaxwindowHeight = 1,
}) => {
  const parallaxRef = useRef(null);
  const [scrollData, setScrollData] = useState({
    opacity: 1,
    backgroundPositionX: "50%",
  });

  const handleScroll = useCallback(() => {
    if (parallaxRef.current) {
      const section = parallaxRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const distanceFromCenter = Math.abs(
        windowHeight / 3.3 -
          (section.top + (section.height / 4.5) * parallaxHeight)
      );
      const maxOpacityDistance = (windowHeight / 2.5) * parallaxwindowHeight;
      const opacity = 1 - distanceFromCenter / maxOpacityDistance;
      const clampedOpacity = opacity < 0 ? 0 : opacity;

      const scrolled =
        (windowHeight - section.top) / (windowHeight + section.height);
      const backgroundPositionX = Math.max(
        0,
        Math.min(100, scrolled * 100 * parallaxSpeed)
      );

      setScrollData({
        opacity: clampedOpacity,
        backgroundPositionX: `${backgroundPositionX}%`,
      });
    }
  }, [parallaxSpeed, parallaxHeight, parallaxwindowHeight]);

  useEffect(() => {
    const handleScrollThrottled = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollThrottled);
    return () => window.removeEventListener("scroll", handleScrollThrottled);
  }, [handleScroll]);

  return (
    <div
      className="menu-parallaxComponentsX__content"
      ref={parallaxRef}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPositionX: scrollData.backgroundPositionX,
        alignItems: alignItems || "end",
      }}
    >
      <div
        className="menu-parallaxComponentsX__content-context"
        style={{ opacity: scrollData.opacity }}
      >
        <h1 className="menu-parallaxComponentsX__content-title">{title}</h1>
        <p className="menu-parallaxComponentsX__content-text">{text}</p>
      </div>
    </div>
  );
};

ParallaxComponentX.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtext: PropTypes.string,
  showReservationLink: PropTypes.bool,
  alignItems: PropTypes.string,
  parallaxSpeed: PropTypes.number,
  parallaxHeight: PropTypes.number,
  parallaxwindowHeight: PropTypes.number,
};

export default ParallaxComponentX;
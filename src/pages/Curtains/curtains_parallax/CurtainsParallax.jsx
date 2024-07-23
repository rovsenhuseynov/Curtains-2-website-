import React, { useEffect, useState } from "react";
import "./CurtainsParallax.scss";

import image_1 from "../../../assets/images/WEBP_formats/curtain_155.webp";
import ParallaxComponent from "../../../reusable/ParallaxComponent/ParallaxComponent";

function CurtainsParallax() {
  const showReservationLink = true;
  const [parallaxSpeed, setParallaxSpeed] = useState(0.3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setParallaxSpeed(.6);
      } else if (width <= 768) {
        setParallaxSpeed(0.6);
      } else if (width <= 1025) {
        setParallaxSpeed(0.6);
      } else {
        setParallaxSpeed(0.6);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="curtains-parallaxComponents">
      <ParallaxComponent
        backgroundImage={image_1}
        title="Biz Sizə nə təklif edirik ?"
        text="Pəncərələrin interyerə uyğun olması üçün düzgün rəng, parça növünü
  və dizayn tərzini seçməkdə kömək etmək !"
        alignItems="center"
        textAlign="center"
        parallaxSpeed={parallaxSpeed}
        parallaxHeight={1}
        parallaxwindowHeight={1}
        showReservationLink={showReservationLink}
      />
    </div>
  );
}

export default CurtainsParallax;


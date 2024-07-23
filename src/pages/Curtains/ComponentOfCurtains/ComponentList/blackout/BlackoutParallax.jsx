import React, { useEffect, useState } from "react";
import ParallaxComponent from "../../../../../reusable/ParallaxComponent/ParallaxComponent";
import blackoutParallaxImage from "../../../../../assets/images/blackout/blackoutCurtain.webp";

const BlackoutParallax = () => {
  const showReservationLink = true;
  const [parallaxSpeed, setParallaxSpeed] = useState(0.3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setParallaxSpeed(1);
      } else if (width <= 768) {
        setParallaxSpeed(0.9);
      } else if (width <= 1025) {
        setParallaxSpeed(0.9);
      } else {
        setParallaxSpeed(0.9);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="menu-parallaxComponents">
      <ParallaxComponent
        backgroundImage={blackoutParallaxImage}
        title="Blackout "
        text="KATALOQU"
        alignItems="center"
        textAlign="center"
        parallaxSpeed={parallaxSpeed}
        parallaxHeight={1}
        parallaxwindowHeight={1}
        showReservationLink={showReservationLink}
      />
    </div>
  );
};

export default BlackoutParallax;

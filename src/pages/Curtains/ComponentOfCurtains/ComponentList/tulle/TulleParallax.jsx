import React, { useEffect, useState } from 'react'
import ParallaxComponent from '../../../../../reusable/ParallaxComponent/ParallaxComponent';
import tulleParallaxImage from "../../../../../assets/images/tulle_data/TulleParallax.webp";

const TulleParallax = () => {
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
        setParallaxSpeed(.7);
      } else {
        setParallaxSpeed(.7);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="menu-parallaxComponents">
      <ParallaxComponent
        backgroundImage={tulleParallaxImage}
        title="Tül "
        text="kataloqu"
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

export default TulleParallax
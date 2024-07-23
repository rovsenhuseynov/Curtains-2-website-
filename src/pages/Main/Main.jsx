import React from 'react';
import "./Main.scss";
import HeroSection from './heroSection/HeroSection';
import AboutUsSection from './AboutUs/AboutUsSection';
import VideoSection from './VideoSection/VideoSection';
import Advantages from './advantages/Advantages';
import FaqSection from './faqSection/FaqSection';


const Main = () => {
  return (
    <div className='home'>
      <HeroSection/>
      <AboutUsSection/>
      <VideoSection/>
      <Advantages/>
      <FaqSection/>
    </div>
  )
}

export default Main;
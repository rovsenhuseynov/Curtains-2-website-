import React from "react";
import './social_media.scss';
import { socialMediaData } from "./socialMediaData"; // Импортируйте данные

function SocialMedia() {
  return (
    <div className="footer-top__contact-info__social-media">
      {socialMediaData.map((item, index) => (
        <a key={index} href={item.href} className={item.className}>
          <img src={item.image} alt={item.alt} className="logo-social-media_img" />
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
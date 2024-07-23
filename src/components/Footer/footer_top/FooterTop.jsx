import React from "react";
import "./footer_top.scss";
import MyMap from "../map/MyMap";
import SocialMedia from "./social_media/SocialMedia";
import Logo from "../../../reusable/Logo/Logo";

function FooterTop() {
  return (
    <div className="footer-top">
      <div className="footer-top__contact-info">
        <div className="footer-logo">
          <Logo />
        </div>

        <h2 className="footer-top__contact-info_title">
          Bizimlə əlaqə saxlayın
        </h2>

        <div className="footer-top__contact-info_tel-numbers">
          <a
            href="tel: 00 99450 640 67 01"
            className="footer-top__contact-info_number-1"
          >
            00 99450 640 67 01
          </a>
        </div>
        <SocialMedia />
      </div>

      <div className="footer-top__map">
        <MyMap />
      </div>
    </div>
  );
}

export default FooterTop;

import React from "react";
import "./footer.scss";
import FooterTop from "./footer_top/FooterTop";
import FooterBottom from "./footer_bottom/FooterBottom";


function Footer() {


  return (
    <footer className="footer">

      <div className="container">
        <FooterTop />
        <div className="line"></div>
        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;

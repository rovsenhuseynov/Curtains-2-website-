import React from "react";
import "./footer_contact_details.scss";
import { contactDetails } from "./contactDetails";

function FooterContactDetails() {
  return (
    <div className="contact-info">
      {contactDetails.map((item, index) => (
        <a
          href={item.link}
          key={index}
          className={`contact-info__item contact-info__item_${item.block}`}
        >
          <img
            src={item.icon}
            alt={`logo-${item.block}`}
            className={`contact-info__item_${item.block}-svg contact-info__item_svg`}
          />
          <div className="contact-info__item-text-block">
            <p
              className={`contact-info__item_${item.block}-title contact-info__item_text`}
            >
              {item.title}
            </p>
            <h5 className={`contact-info__item_${item.block}`}>{item.text}</h5>
          </div>
        </a>
      ))}
    </div>
  );
}

export default FooterContactDetails;

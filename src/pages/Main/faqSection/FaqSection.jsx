import React from "react";
import "./faqSection.scss";
import FaqAccordion from "./faqAccordion/FaqAccordion";


function FaqSection() {
  return (
    <section className="faq">
      <div className="container">
        <div className="inner-container">
          <div className="faq-left">
            <h2 className="faq-left__title">Faq</h2>
            <p className="faq-right__explanatory-text">
              Hər hansı bir sualınız varsa, sifarişinizin təfərrüatlarını
              dəqiqləşdirmək və ya sadəcə olaraq arzularınızı bölüşmək
              istəyirsinizsə, bizimlə əlaqə saxlamaqdan çəkinməyin. Bizim
              mehriban və bilikli komandamız hər hansı bir sualınızla sizə kömək
              etməkdən məmnun olacaq.
            </p>
          </div>
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
}
export default FaqSection;

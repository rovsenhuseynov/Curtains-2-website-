import React, { useEffect, useRef, useState } from "react";
import "./faqPage.scss";
import faqData from "./FaqData";
import arrow_direction from "../../assets/images/SVG_formats/arrow_top/arrow-top_2.svg";

function FaqPage() {
  const [openIds, setOpenIds] = useState([]);
  const [heights, setHeights] = useState([]);
  const contentRefs = useRef(
    Array(faqData.length)
      .fill(null)
      .map(() => React.createRef())
  );

  useEffect(() => {
    const newHeights = contentRefs.current.map((ref, index) => ({
      id: index,
      height: ref.current.scrollHeight,
    }));
    setHeights(newHeights);
  }, [openIds]);

  const clickHandler = (id) => {
    setOpenIds((prevOpenIds) =>
      prevOpenIds.includes(id)
        ? prevOpenIds.filter((openId) => openId !== id)
        : [...prevOpenIds, id]
    );
  };

  return (
    <div className="faq-page">
      <div className="faq-page_header"></div>
      <div className="container">
        <h1 className="faq-page__title">
          Pərdə, tul və karnizlər haqqinda ən çox veri̇lən suallar səhifəsi
        </h1>

        <ul className="accordion">
          {faqData.map((item, id) => (
            <li className="accordion__item" key={id}>
              <div className="accordion__item_top">
                <div className="accordion__item_top_left">
                  <h4 className="accordion__item_serial-number">
                    {item.serial_number}
                  </h4>
                  <div
                    className={`accordion__item_title ${
                      openIds.includes(id) ? "open" : ""
                    }`}
                  >
                    {item.question}
                  </div>
                </div>
                <button
                  className={`accordion__item_arrow ${
                    openIds.includes(id) ? "open" : ""
                  }`}
                  onClick={() => clickHandler(id)}
                >
                  <img
                    src={arrow_direction}
                    alt="arrow to open and close a tab"
                  />
                </button>
              </div>
              <div
                className={`accordion__item_collapse ${
                  openIds.includes(id) ? "open" : ""
                }`}
                style={{
                  maxHeight: openIds.includes(id)
                    ? `${heights.find((h) => h.id === id)?.height}px`
                    : 0,
                }}
              >
                <div
                  ref={contentRefs.current[id]}
                  className="accordion__item_faqData"
                >
                  {/* Отображение ответа на вопрос */}
                  <p className="accordion__item_faqData_text">{item.answer}</p>

                  {/* Отображение изображений (если они присутствуют) */}
                  <div className="accordion__item_faqData_img-blog">
                    {[item.image_1, item.image_2, item.image_3]
                      .filter(Boolean)
                      .map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Изображение для ${item.question}`}
                          className="accordion__item_faqData_img"
                        />
                      ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="faq-footer"></div>
    </div>
  );
}

export default FaqPage;

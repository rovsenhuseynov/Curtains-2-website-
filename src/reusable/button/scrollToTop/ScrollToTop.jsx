import React, { useEffect } from "react";
import arrow_top from "../../../assets/images/SVG_formats/Arrow_1/arrow_to_top.svg";
import './scrollToTop.scss';

function ScrollToTop() {
  useEffect(() => {
    // Находим кнопку для прокрутки вверх
    const scrollToTopButton = document.querySelector(".scrollToTop__button-img");

    // Функция для плавной прокрутки вверх
    function scrollToTop() {
      if (window.scrollY !== 0) {
        window.scrollBy(0, -100); // Измените значение -10 на ваше усмотрение для более плавной или быстрой прокрутки
        requestAnimationFrame(scrollToTop);
      }
    }

    // Добавляем обработчик события на кнопку
    scrollToTopButton.addEventListener("click", scrollToTop);

    return () => {
      // Удалить обработчик события при размонтировании компонента
      scrollToTopButton.removeEventListener("click", scrollToTop);
    };
  }, []);

  return (
    <div className="scrollToTop">
      <button className="scrollToTop__button">
        <img src={arrow_top} alt="arrow-top" className="scrollToTop__button-img" />
      </button>
    </div>
  );
}

export default ScrollToTop;
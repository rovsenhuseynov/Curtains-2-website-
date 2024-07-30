// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { ReactComponent as ChangeIcon } from "../../assets/images/SVG_formats/swiper_component/minus.svg";
// import { ReactComponent as OrderedIcon } from "../../assets/images/SVG_formats/swiper_component/plus.svg";
// import "./swiper_component.scss";
// import {
//   Navigation,
//   Pagination,
//   A11y,
//   EffectFade,
//   Scrollbar,
//   Keyboard,
// } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const SwiperComponent = ({
//   slideData,
//   selectedSlideIndex,
//   handleSlideClick,
//   handleSwiperUpdate,
//   swiper,
//   singleSlideMode,
//   getSlidesPerView,
//   showLikesDislikes,
// }) => {
//   const [likesDislikes, setLikesDislikes] = useState(() => {
//     const storedLikesDislikes =
//       JSON.parse(localStorage.getItem("likesDislikes")) ||
//       Array(slideData.length).fill(0);
//     return storedLikesDislikes;
//   });

//   const handleLike = (index, event) => {
//     event.stopPropagation(); // Остановить всплытие события
//     const newLikesDislikes = [...likesDislikes];
//     newLikesDislikes[index]++;
//     setLikesDislikes(newLikesDislikes);
//     updateLocalStorage("likesDislikes", newLikesDislikes);
//   };

//   const handleDislike = (index, event) => {
//     event.stopPropagation(); // Остановить всплытие события
//     const newLikesDislikes = [...likesDislikes];
//     if (newLikesDislikes[index] > 0) {
//       // Проверяем, что значение не равно нулю
//       newLikesDislikes[index]--;
//       setLikesDislikes(newLikesDislikes);
//       updateLocalStorage("likesDislikes", newLikesDislikes);
//     }
//   };

//   const updateLocalStorage = (key, data) => {
//     localStorage.setItem(key, JSON.stringify(data));
//   };

//   return (
//     <Swiper
//       key={singleSlideMode}
//       modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Keyboard]}
//       slidesPerView={singleSlideMode ? 1 : getSlidesPerView()}
//       spaceBetween={15}
//       navigation
//       scrollbar={{ draggable: true }}
//       keyboard={{ enabled: true }}
//       initialSlide={selectedSlideIndex}
//       speed={800}
//       className="main-swiper"
//       onSwiper={handleSwiperUpdate}
//       onSlideChange={() => handleSwiperUpdate(swiper)}
//     >
//       {slideData.map((service, index) => (
//         <SwiperSlide
//           key={index}
//           className={`gallery__item ${
//             index === selectedSlideIndex ? "selected-slide" : ""
//           }`}
//           onClick={() => handleSlideClick(index)}
//         >
//           <img
//             src={service.image}
//             alt={`Slide ${index + 1}`}
//             className="gallery__item-image"
//             loading="lazy"
//           />
//           {showLikesDislikes && (
//             <div className="gallery__item-counter">
//               <button
//                 onClick={(event) => handleLike(index, event)}
//                 className="gallery__item-counter-btn--ordered"
//               >
//                 <OrderedIcon />
//               </button>

//               <span className="gallery__item-counter-dial">
//                 {likesDislikes[index]}
//               </span>

//               <button
//                 onClick={(event) => handleDislike(index, event)}
//                 className="gallery__item-counter-spotter--btn"
//               >
//                 <ChangeIcon />
//               </button>
//             </div>
//           )}
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default SwiperComponent;





import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as ChangeIcon } from "../../assets/images/SVG_formats/swiper_component/minus.svg";
import { ReactComponent as OrderedIcon } from "../../assets/images/SVG_formats/swiper_component/plus.svg";
import { useNavigate } from "react-router-dom"; // Обновляем импорт
import "./swiper_component.scss";
import {
  Navigation,
  Pagination,
  A11y,
  EffectFade,
  Scrollbar,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperComponent = ({
  slideData,
  selectedSlideIndex,
  handleSlideClick,
  handleSwiperUpdate,
  swiper,
  singleSlideMode,
  getSlidesPerView,
  showLikesDislikes,
}) => {
  const [likesDislikes, setLikesDislikes] = useState(() => {
    const storedLikesDislikes =
      JSON.parse(localStorage.getItem("likesDislikes")) ||
      Array(slideData.length).fill(0);
    return storedLikesDislikes;
  });

  const navigate = useNavigate(); // Получаем объект navigate из React Router

  useEffect(() => {
    const handlePopState = () => {
      window.scrollTo(0, window.scrollY);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    const handleTouchMove = (event) => {
      event.preventDefault();
    };

    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const handleLike = (index, event) => {
    event.stopPropagation(); // Остановить всплытие события
    const newLikesDislikes = [...likesDislikes];
    newLikesDislikes[index]++;
    setLikesDislikes(newLikesDislikes);
    updateLocalStorage("likesDislikes", newLikesDislikes);
  };

  const handleDislike = (index, event) => {
    event.stopPropagation(); // Остановить всплытие события
    const newLikesDislikes = [...likesDislikes];
    if (newLikesDislikes[index] > 0) {
      // Проверяем, что значение не равно нулю
      newLikesDislikes[index]--;
      setLikesDislikes(newLikesDislikes);
      updateLocalStorage("likesDislikes", newLikesDislikes);
    }
  };

  const updateLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const handleSlideClickWithHistory = (index) => {
    navigate(`${window.location.pathname}?slideIndex=${index}`, {
      replace: true,
    });
    handleSlideClick(index);
  };

  return (
    <Swiper
      key={singleSlideMode}
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Keyboard]}
      slidesPerView={singleSlideMode ? 1 : getSlidesPerView()}
      spaceBetween={15}
      navigation
      scrollbar={{ draggable: true }}
      keyboard={{ enabled: true }}
      initialSlide={selectedSlideIndex}
      speed={800}
      className="main-swiper"
      onSwiper={handleSwiperUpdate}
      onSlideChange={() => handleSwiperUpdate(swiper)}
    >
      {slideData.map((service, index) => (
        <SwiperSlide
          key={index}
          className={`gallery__item ${
            index === selectedSlideIndex ? "selected-slide" : ""
          }`}
          onClick={() => handleSlideClickWithHistory(index)}
        >
          <img
            src={service.image}
            alt={`Slide ${index + 1}`}
            className="gallery__item-image"
            loading="lazy"
          />
          {showLikesDislikes && (
            <div className="gallery__item-counter">
              <button
                onClick={(event) => handleLike(index, event)}
                className="gallery__item-counter-btn--ordered"
              >
                <OrderedIcon />
              </button>

              <span className="gallery__item-counter-dial">
                {likesDislikes[index]}
              </span>

              <button
                onClick={(event) => handleDislike(index, event)}
                className="gallery__item-counter-spotter--btn"
              >
                <ChangeIcon />
              </button>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;

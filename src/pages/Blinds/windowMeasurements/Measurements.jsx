import React, { useState, useEffect } from "react";
import masters from "../../../assets/images/WEBP_formats/blinds-measurement-img/img-work.webp";
import { videoData } from "./msr_Data.js";
import msrData from "./msr_Data.js";
import "./measurements.scss";

const Measurements = () => {
  const [videos, setVideos] = useState([]);
  const [allowPlay, setAllowPlay] = useState(false);

  useEffect(() => {
    // Получаем видео из msr_Data.js
    setVideos(videoData);
  }, []);

  return (
    <div className="msr-vid">
      <h3 className="msr-vid__title">
        Jalüzlərin sifarişi üçün pəncərələr necə ölçülməlidri ?
      </h3>
      <div className="msr-vid__adviсe">
        <h2 className="msr-vid__adviсe-title">Məsləhət</h2>
        <ul className="msr-vid__adviсe-list">
          {msrData.map((item, index) => (
            <li key={index} className="msr-vid__adviсe-list-elem">
              {item.answer}
            </li>
          ))}
        </ul>
      </div>


      <div className="msr-vid__inner-container">
        {videos.map((video, index) => (
          <div key={index} className="msr-vid__inner-container-index">

              <h3 className="msr-vid__inner-container-title">{video.title}</h3>
              <div className="msr-vid__video-content">
                <video
                  className="msr-vid__video"
                  controls
                  autoPlay={allowPlay}
                  muted
                  loop
                  preload="auto"
                  crossOrigin="anonymous"
                  src={video.src}
                  onClick={() => setAllowPlay(true)}
                  style={{ outline: "none" }} // добавляем стиль для скрытия контура фокуса
                >
                  Your browser does not support the video tag.
                </video>
              </div>
           
          </div>
        ))}
      </div>
      <div className="msr-vid__bottom">
        <h5 className="msr-vid__bottom-text">
          <span className="color-the-text">
            Ölçüləri düzgün ala biləcəyinizə əmin deyilsinizsə
          </span>
          və eviniz üçün jalüz sifariş etmək istəyirsinizsə, o zaman
          <span className="color-the-text"> bizimlə əlaqə saxlayın.</span>
          Texniki mütəxəssisimiz sizin üçün əlverişli vaxtda evinizə gələcək və
          bu proses üçün bütün tələbləri nəzərə alaraq ölçmə aparacaq. Usta
          günəş işığından və yad gözlərdən effektiv qorunma təmin edəcək, həm də
          ətrafdakı interyerə uyğun olacaq ideal jalyüz sistemi seçməkdə sizə
          yardımcı olacaq, mövcud jalyüz dizaynları haqqında məlumat verəcək,
          özü ilə materialların kataloqunu gətirəcəkdir.
        </h5>
        <img
          src={masters}
          alt="жалюзи для дома"
          className="msr-vid__bottom-img"
        />
      </div>
    </div>
  );
};

export default Measurements;

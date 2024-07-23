import React, { useState, useEffect, useRef } from "react";
import "./VideoSection.scss";
import playImg from "../../../assets/video/play-button.svg";
import video1 from "../../../assets/video/interior design_1.mp4";

const VideoSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [videoThumbnail, setVideoThumbnail] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    // Проверяем, сохранено ли состояние модального окна в localStorage
    const savedModalState = localStorage.getItem("modalState");
    if (savedModalState) {
      setModalOpen(JSON.parse(savedModalState));
    }
  }, []);

  const openModal = () => {
    setModalOpen(true);
    // Сохраняем состояние модального окна в localStorage
    localStorage.setItem("modalState", JSON.stringify(true));
    // Начинаем воспроизведение видео после короткой задержки
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current
          .play()
          .then(() => {
            // Ставим видео на паузу после начала воспроизведения
            videoRef.current.pause();
            // Получаем текущий кадр видео
            const canvas = document.createElement("canvas");
            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;
            const context = canvas.getContext("2d");
            context.drawImage(
              videoRef.current,
              0,
              0,
              canvas.width,
              canvas.height
            );
            const dataURL = canvas.toDataURL();
            setVideoThumbnail(dataURL);
          })
          .catch((error) => {
            console.error("Error playing video:", error);
          });
      }
    }, 30);
  };

  return (
    <div className="video-section">
      <div className="container">
        <h3 className="video-section__modal-overlay-title">
          Pərdə evinizdə rahatlıq yaratmaq üçün son toxunuşdur.
        </h3>
        {!isModalOpen && (
          <div className="thumbnail-container">
            {videoThumbnail ? (
              <img
                src={videoThumbnail}
                alt="Video Thumbnail"
                className="thumbnail-image"
              />
            ) : (
              <div className="thumbnail-placeholder" />
            )}
            <button
              onClick={openModal}
              className="video-section__modal-overlay-btn-play"
            >
              <img src={playImg} alt="Play Button" />
            </button>
          </div>
        )}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-overlay__content">
              <video ref={videoRef} width="100%" height="auto" controls>
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSection;

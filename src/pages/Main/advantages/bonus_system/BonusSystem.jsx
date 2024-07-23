import React, { useState } from "react";
import "./bonus_system.scss";
import Bonus_1 from "../../../../assets/images/advantages-bonus/Bonus_1.webp";
import Bonus_2 from "../../../../assets/images/advantages-bonus/Bonus_2.webp";
import Bonus_3 from "../../../../assets/images/advantages-bonus/Bonus_3.webp";

function BonusSystem() {
  const [content, setContent] = useState("Alıcının adı...");

  const handleChange = (event) => {
    const text = event.target.textContent;
    const maxCharacters = 15; // Максимальное количество символов

    if (text.length <= maxCharacters) {
      setContent(text);
    } else {
      setContent(text.slice(0, maxCharacters));
    }
  };

  const handleKeyDown = (event) => {
    const text = event.target.textContent;
    const maxCharacters = 15; // Максимальное количество символов

    if (text.length >= maxCharacters && event.key !== "Backspace") {
      // Если длина текста превышает лимит и нажата не клавиша Backspace,
      // отменяем действие по умолчанию, чтобы символ не был добавлен
      event.preventDefault();
    }
  };

  return (
    <div className="advantages-bonus">
      <div className="container">
      <div className="advantages-bonus__title">
          Müxtəlif endirim təklifləri
        </div>
        <div className="advantages-bonus__head_background" />

        <div className="advantages-bonus__card">
          Bonus kartı
        </div>
        <div className="advantages-bonus__contecst">
          <div className="advantages-bonus__contecst-inexpensive">
            Ucuz pərdələr və jalyüzlər
          </div>
          <div className="advantages-bonus__contecst-discounts">
            Bonus kartı ilə 7% ENDİRİM !
          </div>
          <div className="advantages-bonus__contecst-special_Offers">
            Xüsusi təklif
          </div>
          <div
            suppressContentEditableWarning={true}
            contentEditable={true}
            onKeyDown={handleKeyDown}
            onBlur={handleChange}
            className="editable-text"
          >
            {content}
          </div>
        </div>
        <div className="sunshade-content-line1"></div>

        <div className="instructions-disc">
          <h3 className="instructions-disc__title">
            Bonus kartı yaratmaq üçün təlimat
          </h3>
          <div className="instructions-disc__content">
            <p className="instructions-disc__content-text">
              Bu şəkildə göstərilən kimi , kartı təxminən həmin yerə yerləşdirin
              və adınızı "Alıcının adı..." sütununa daxil edin. Telefonunuzla fotoqrafını çəkin - bu sizin 8% endirim kuponunuz olacaq. Endirim əldə
              etmək üçün bizdən məhsul alarkən bu şəkli göstərin.
            </p>
            <img src={Bonus_3} alt="Bonus kartı" className="instructions-disc__content-img-3 disc__content-img" />

            <img src={Bonus_2} alt="Bonus kartı" className="instructions-disc__content-img-2 disc__content-img" />

            <img src={Bonus_1} alt="Bonus kartı" className="instructions-disc__content-img-1 disc__content-img" />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default BonusSystem;

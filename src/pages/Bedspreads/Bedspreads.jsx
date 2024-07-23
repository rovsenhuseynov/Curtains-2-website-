import React from "react";
import "./Bedspreads.scss";
import BedspreadsSlider from "./bedspreads_slider/BedspreadsSlider";

function Bedspreads() {
  return (
    <div className="bedspreads">
      <div className="container">
        <div className="bedspreads__head">
          <h2 className="bedspreads__title">
          Hazır yataq örtüklərinin satışı  və sifarişlə hazırlanması
          </h2>
        </div>
        <article className="bedspreads-text">
          <p className="bedspreads__generically-text">
            İstilik və rahatlıq hər evin ayrılmaz hissəsidir. Evdə belə bir
            atmosfer yaratmağa kömək edən aksesuarlardan biri yumşaq 'pled'-lər
            və yataq örtükləridir - onlar qədim zamanlardan bəri rahatlığın
            simvolu hesab olunur. Biz sizə münasib qiymətlər, yüksək keyfiyyət,
            şık tekstil dizaynı, həmçinin müştərinin ölçüsünə görə xüsusi məhsul
            dizaynının fərdi inkişafı imkanı təklif edirik.
          </p>
        </article>
        <BedspreadsSlider />
      </div>
    </div>
  );
}

export default Bedspreads;

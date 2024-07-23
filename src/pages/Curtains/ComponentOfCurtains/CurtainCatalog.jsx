import React from "react";
import "./curtain_catalog.scss";
// import CatalogSlider from "./catalogSlider/CatalogSlider";
import CatalogSlider from "./ComponentList/CatalogSlider";

function CurtainCatalog() {
  return (
    <section className="curtain-catalog">

        <div className="curtain-catalog__wrapper">
          <div className="curtain-catalog__top">
            <h2 className="curtain-catalog__top-title">
              Pərdələrin istehsalında gərəkli olunan materiallar
            </h2>
            <p className="curtain-catalog__top-text">
              Pəncərələrə sadəcə pərdələr asmaq kifayət deyil; onları digər
              daxili elementlərlə necə birləşdirəcəyini də bilməlisiniz. Bir
              material seçərkən bir çox nüans nəzərə alınmalıdır: otağın
              məqsədi, dizaynı və ölçüsü, təbii işığın miqdarı və bir çox digər
              amillər. Beləliklə, pərdələr üçün hansı parça seçmək lazımdır ki,
              onlar interyerə uyğun olsun, otağı bəzəməyə kömək etsin və
              rahatlıq hissi yaratsın?
            </p>
          </div>
         <CatalogSlider/>
        </div>

    </section>
  );
}

export default CurtainCatalog;

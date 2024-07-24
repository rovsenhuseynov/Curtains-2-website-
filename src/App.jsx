import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import Main from "./pages/Main/Main";
import Bedspreads from "./pages/Bedspreads/Bedspreads";
import Blinds from "./pages/Blinds/Blinds";
import Accessories from "./pages/Accessories/Accessories";
import Curtains from "./pages/Curtains/Curtains";
import ThickCurtains from "./pages/Curtains/ComponentOfCurtains/ComponentList/thick_Curtains/ThickCurtains";
import Sunshade from "./pages/Curtains/ComponentOfCurtains/ComponentList/sunshade/Sunshade";
import Blackout from "./pages/Curtains/ComponentOfCurtains/ComponentList/blackout/Blackout";
import Peculiarities from "./pages/Curtains/ComponentOfCurtains/ComponentList/peculiarities/Peculiarities";
import NotFound from "./pages/NotFoundSection/NotFound";
import Tulle from "./pages/Curtains/ComponentOfCurtains/ComponentList/tulle/Tulle";
import FaqPage from "./pages/faqPage/FaqPage";
import BonusSystem from "./pages/Main/advantages/bonus_system/BonusSystem";
import Advantages from "./pages/Main/advantages/Advantages";
import PhotoGallery from "./pages/Curtains/curtains_photo_gallery/PhotoGallery";
import CatalogSlider from "./pages/Curtains/ComponentOfCurtains/ComponentList/CatalogSlider";

const App = () => {
  return (
    <div className="project-wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
           {/* Роуты для слайдера на странице */} 
          <Route path="curtains">
            <Route index element={<Curtains />} />
            <Route path="tulle" element={<Tulle />} />
            <Route path="thick_curtains" element={<ThickCurtains />} />
            <Route path="subtle_blackout" element={<Sunshade />} />
            <Route path="blackout" element={<Blackout />} />
            <Route path="peculiarities" element={<Peculiarities />} />
          </Route>
           {/* Роуты для навигационной панели */}
          <Route index element={<Curtains />} />
          <Route path="tulle" element={<Tulle />} />
          <Route path="thick_curtains" element={<ThickCurtains />} />
          <Route path="subtle_blackout" element={<Sunshade />} />
          <Route path="blackout" element={<Blackout />} />
          <Route path="peculiarities" element={<Peculiarities />} />

          <Route path="blinds" element={<Blinds />} />
          <Route path="bedspreads" element={<Bedspreads />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="advantages" element={<Advantages />} />
          <Route path="bonus" element={<BonusSystem />} />
          <Route path="photo_gallery" element={<PhotoGallery/>} />
          <Route path="CatalogSlider" element={<CatalogSlider/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MyMap.scss"

import mapMarkerIcon from "../../../assets/images/SVG_formats/location-pin-2965.svg";

const MyMap = () => {
  const defaultPosition = [40.325431, 49.781370];

  // Создаём кастомный маркер с использованием SVG-файла
  const customIcon = new L.Icon({
    iconUrl: mapMarkerIcon,
    iconSize: [45, 45], // Размер иконки
    iconAnchor: [16, 32], // Анкорная точка иконки
    popupAnchor: [0, -32], // Позиция всплывающего окна
  });

  return (
    <div className="myMap-style"
    >
      <MapContainer
        center={defaultPosition}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={defaultPosition} icon={customIcon} />
      </MapContainer>
    </div>
  );
};

export default MyMap;






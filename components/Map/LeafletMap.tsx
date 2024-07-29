"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";
import React from "react";

// Fix icon issues with Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const markers = [
  {
    position: [24.8607, 67.0011] as LatLngExpression,
    popup: "Vehicle No 1 - Karachi",
  },
  {
    position: [31.5497, 74.3436] as LatLngExpression,
    popup: "Vehicle No 2 - Lahore",
  },
  {
    position: [31.4504, 73.135] as LatLngExpression,
    popup: "Vehicle No 3 - Faisalabad",
  },
  {
    position: [33.6844, 73.0479] as LatLngExpression,
    popup: "Vehicle No 4 - Islamabad",
  },
  {
    position: [30.1575, 71.5249] as LatLngExpression,
    popup: "Vehicle No 5 - Multan",
  },
  {
    position: [34.0151, 71.5249] as LatLngExpression,
    popup: "Vehicle No 6 - Peshawar",
  },
  {
    position: [30.1798, 66.975] as LatLngExpression,
    popup: "Vehicle No 7 - Quetta",
  },
  {
    position: [32.0853, 74.1874] as LatLngExpression,
    popup: "Vehicle No 8 - Sialkot",
  },
  {
    position: [25.396, 68.3578] as LatLngExpression,
    popup: "Vehicle No 9 - Hyderabad",
  },
  {
    position: [33.5651, 73.0169] as LatLngExpression,
    popup: "Vehicle No 10 - Rawalpindi",
  },
];

const vehicleIcon = L.icon({
  iconUrl: "/assets/images/car.png", // URL to your 3D vehicle icon in the public folder
  iconSize: [32, 37], // Adjust size as needed
  iconAnchor: [25, 50], // Adjust anchor point
  popupAnchor: [0, -50], // Adjust popup position
});

const LeafletMap: React.FC = () => {
  const initialPosition: LatLngExpression = [30.3753, 69.3451]; // Center of Pakistan

  return (
    <MapContainer
      center={initialPosition}
      zoom={5}
      style={{ height: "70vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={vehicleIcon}>
          <Popup>{marker.popup}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;

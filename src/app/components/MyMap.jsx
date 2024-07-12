"use client";
import React from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function MyMap(props) {
  const { position, zoom } = props;

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: "250px", width: "80%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Stoop sale! <br /> Corner of court and 2nd.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

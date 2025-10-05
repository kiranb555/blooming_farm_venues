"use client";

import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const venueIcon = new Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-shadow.png",
  shadowSize: [41, 41]
});

export default function Locate() {
  const mapRef = useRef(null);

  const venueLocation = {
    lat: 35.4542331,
    lng: -80.745409
  };

  const resetMap = (map) => {
    if (map) {
      map.setView(venueLocation, 15);
    }
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our Venue Location
          </h2>
          <p className="text-gray-600">
            Discover our stunning venue location on the map below
          </p>
        </div>
        <div className="flex justify-center gap-2 mb-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (mapRef.current) {
                resetMap(mapRef.current);
              }
            }}
            className="px-3 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg text-sm"
            aria-label="Reset map view"
          >
            Reset View
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              const { lat, lng } = venueLocation;
              const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
              window.open(googleMapsUrl, '_blank');
            }}
            className="px-3 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors shadow-lg text-sm"
            aria-label="Get directions"
          >
            Get Directions
          </button>
        </div>
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={venueLocation}
            zoom={15}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
            ref={(map) => {
              mapRef.current = map;
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={venueLocation} icon={venueIcon}>
              <Popup>
                <div className="text-center">
                  <h3 className="font-bold mb-2">Blooming Farm Venues</h3>
                  <p className="text-gray-600">Your Event Destination</p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
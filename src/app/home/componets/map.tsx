"use client";
import Map, { GeolocateControl, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "../home.module.css";
import { useEffect, useState } from "react";
export default function MapIntegration() {
  interface viewporttype {
    latitude?: number;
    longitude?: number;
    zoom?: number;
  }
  const [viewport, setViewport] = useState<viewporttype>({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 12,
      });
    });
  });
  return (
    <div>
      {viewport.longitude && viewport.latitude && (
        <div className={styles.mapdiv}>
          <Map
            mapboxAccessToken="pk.eyJ1IjoiZmVybm8wMDciLCJhIjoiY2x0amo0ajQyMGgzejJpcXdvM2t3cTVwYSJ9.G88ckj-uEVwDGFQCsJWLVw"
            initialViewState={viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
            <Marker
              longitude={viewport.longitude}
              latitude={viewport.latitude}
            />
            </Map>
        </div>
      )}
    </div>
  );
}

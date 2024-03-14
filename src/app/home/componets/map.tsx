"use client";
import Map, { GeolocateControl, Marker,} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "../home.module.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
export default function MapIntegration() {
  interface viewporttype {
    latitude?: number;
    longitude?: number;
    zoom?: number;
  }
  const searchparams=useSearchParams()
  const [hosteldata,setHosteldata]=useState<any>()
  const [viewport, setViewport] = useState<viewporttype>({latitude:10.1632,
    longitude:76.6413,
    zoom: 5,});
  useEffect(() => {
    fetchmaplocation()
  },[]);
  const fetchmaplocation=()=>{
    const location=searchparams.get("locationname")
    axios.post("http://localhost:8000/vh",{data:location}).then((responce)=>{
        if(responce.data.success)
        {
        setHosteldata(responce.data.data)
        setViewport({...viewport,latitude:parseFloat(responce.data.data[0].hostellatitude),longitude:parseFloat(responce.data.data[0].hostellongitude),zoom:10})
        console.log(hosteldata)
        }
    })
  }
  return (
    <div>
      {viewport.longitude && viewport.latitude && (
        <div className={styles.mapdiv}>
          <Map
            mapboxAccessToken="pk.eyJ1IjoiZmVybm8wMDciLCJhIjoiY2x0amo0ajQyMGgzejJpcXdvM2t3cTVwYSJ9.G88ckj-uEVwDGFQCsJWLVw"
            initialViewState={viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
             <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
             {hosteldata ? hosteldata.map(({hostellatitude,hostellongitude}:any)=>{
              <Marker
              latitude={11.2588}
              longitude={75.7804}
              >
                <div>Marker</div>
              </Marker>
             }):<Marker
             latitude={viewport.latitude}
             longitude={viewport.longitude}></Marker>}
            </Map>
        </div>
      )}
    </div>
  );
}

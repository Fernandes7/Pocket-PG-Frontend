"use client";
import ReactMapGl,{ GeolocateControl, Marker, Popup,NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "../home.module.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
export default function MapIntegration() {
  const searchparams=useSearchParams()
  const [enablepopup,setPopup]=useState<number>()
  const [hosteldata,setHosteldata]=useState<any>()
  useEffect(() => {
    fetchmaplocation()
  },[searchparams]);
  const fetchmaplocation=()=>{
    const location=searchparams.get("locationname")
    axios.post("http://localhost:8000/vh",{data:location}).then((responce)=>{
        if(responce.data.success)
        {
        setHosteldata(responce.data.data)
        console.log(hosteldata)
        }
    })
  }
  const handlepopup=(lat:number)=>{
  setPopup(lat)
  }
  return (
    <div className={styles.mapdiv}>
      <ReactMapGl
        mapboxAccessToken="pk.eyJ1IjoiZmVybm8wMDciLCJhIjoiY2x0amo0ajQyMGgzejJpcXdvM2t3cTVwYSJ9.G88ckj-uEVwDGFQCsJWLVw"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        initialViewState={{
     latitude: 10.1632, longitude: 76.6413, zoom: 7
    }}
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        {hosteldata && hosteldata.map(({hostellongitude,hostellatitude,hostelname,hostelimage}:any) => (
                <Marker
                    key={hostellatitude}
                    latitude={hostellatitude}
                    longitude={hostellongitude}
                    onClick={()=>handlepopup(hostellatitude)}
                >
                      {enablepopup && (enablepopup===hostellatitude) &&<Popup
                      closeOnMove={false}
                      closeOnClick={false}
                      latitude={hostellatitude}
                      longitude={hostellongitude}
                      anchor="bottom"
                      closeButton={false}
                      >
                         <div className={styles.mapdatadiv} onClick={()=>setPopup(null)}>
                          <img src={hostelimage} alt="hostelimageinmap" />
                          <h3>{hostelname}</h3>
                         </div>
                      </Popup>}
                </Marker>
            ))}
                    <NavigationControl />
      </ReactMapGl>
      <div className={`${styles.datainmap} ${!enablepopup && styles.popoffdiv}`} onClick={()=>console.log("clicked div")}>
        <p>Hello world</p>
      </div>
    </div>
  );
}

"use client";
import ReactMapGl,{ GeolocateControl, Marker, Popup,NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "../home.module.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import MappopupServices from "./mappopupservices";
import MapRating from "./mapRating";

export default function MapIntegration() {
  const searchparams=useSearchParams()
  const [enablepopup,setPopup]=useState<number>()
  const [hosteldata,setHosteldata]=useState<any>()
  const [services,setServices]=useState([])
  const [remainingservicelength,setRemainingservicelength]=useState(0)
  const [rating,setRating]=useState()
  useEffect(() => {
    fetchmaplocation()
  },[searchparams]);
  const fetchmaplocation=()=>{
    setPopup(null)
    const location=searchparams.get("locationname")
    if(location)
    {
    axios.post("http://localhost:3002/proxyvh",{data:location}).then((responce)=>{
        if(responce.data.success)
        {
        setHosteldata(responce.data.data)
        console.log(hosteldata)
        }
    })
  }
  else
  {
    const hostelname=searchparams.get("hostelname")
    axios.post("http://localhost:8000/sh",{data:{name:hostelname}}).then((responce)=>{
      if(responce.data.success)
      {
      setHosteldata(responce.data.data)
      console.log(hosteldata)
      }
  })
  }
  }
  const handlepopup=(lat:number,services:string,rating:string)=>{
  setPopup(lat)
  setServices([])
  if(rating)
  setRating(JSON.parse(rating))
  if(services && services.length>0)
  {
    const servicearray=JSON.parse(services)
    const slicesdata=servicearray.slice(1,5)
    setServices(slicesdata)
    setRemainingservicelength(servicearray.length-5)
  }
  }
  return (
    <div className={styles.mapdiv}>
      <ReactMapGl
        mapboxAccessToken="pk.eyJ1IjoiZmVybm8wMDciLCJhIjoiY2x0amo0ajQyMGgzejJpcXdvM2t3cTVwYSJ9.G88ckj-uEVwDGFQCsJWLVw"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        initialViewState={{
     latitude: 10.1632, longitude: 76.6413, zoom: 9
    }}
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        {hosteldata && hosteldata.map(({hostellongitude,hostellatitude,hostelname,hostelimage,hostelservices,hostelinitialrating}:any) => (
                <Marker
                    key={hostellatitude}
                    latitude={hostellatitude}
                    longitude={hostellongitude}
                    onClick={()=>handlepopup(hostellatitude,hostelservices,hostelinitialrating)}
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
         {(services && services.length>0)&&<MapRating rating={rating} />}
         {(services && services.length>0)? services.map((item)=>{
          return(
            <MappopupServices key={item} services={item}/>
          )
         }):<p style={{textAlign:"center",fontFamily:"Lato"}}>This Hostel has No Services To Display</p>}
         {(services && services.length>0)&&<div className={styles.extraservicediv}>
          <p>{remainingservicelength}+</p>
          <img src="https://cdn-icons-png.flaticon.com/128/2989/2989981.png" alt="arrow" />
         </div>}
      </div>
    </div>
  );
}

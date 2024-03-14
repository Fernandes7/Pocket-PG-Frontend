import { useEffect, useState } from "react"
import styles from "../home.module.css"
import axios from "axios"
export default function HomepageInitialdata()
{
    useEffect(()=>{
    fetchlocationdetails()
    },[])
    const [locationdata,setLocationdata]=useState<any>()
    const fetchlocationdetails=()=>{
        axios.get("http://localhost:8000/viewlocation").then((responce)=>{
            if(responce.data.success)
            setLocationdata(responce.data.data)
        })
    }
    return(
        <div className={styles.homepageinitialdatawrap}>
            <h4>Locations we Serve</h4>
            <div className={styles.locationwrap}>
                {locationdata && locationdata.map(({locationname,imageurl,hostelcount}:any)=>{
                    return(
                        <div className={styles.locationcard}>
                        <img src={imageurl} alt="locationimge" />
                        <div className={styles.locationtext}>
                             <div>
                                 <img src="https://cdn-icons-png.flaticon.com/128/9800/9800512.png" alt="locationicon" />
                                 <div>
                                     <h3>{locationname}</h3>
                                     <p>{hostelcount} Hostels</p>
                                 </div>
                             </div>
                             <div>
                                 <img src="https://cdn-icons-png.flaticon.com/128/3550/3550091.png" alt="arrowicon" />
                             </div>
                        </div>
                     </div>
                    )
                })}
               
            </div>
        </div>
    )
}
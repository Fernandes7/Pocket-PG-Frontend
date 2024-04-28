"use client"

import { useEffect, useState } from "react"
import styles from "./startpage.module.css"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function AdminStartpage()
{
    const [data,setData]=useState<any>()
    const router=useRouter()

    useEffect(()=>{
     findlength()
    },[])

    const findlength=()=>{
        axios.post("http://localhost:8000/length").then((responce)=>{
            if(responce.data.success)
            setData(responce.data)
        })
    }
   return(
    <div className={styles.adminstartwrap}>
        <div className={styles.adminstartwhite}>
           <h1>Welcome to Admi Panel of Pocket PG</h1>
           <p className={styles.adminstartp}>You can choose the needed operation to be executed from below cards respectivily</p>
           <div className={styles.adminstartcardwrap}>
             <div className={styles.redadmincard} onClick={()=>router.push("/admin/hosteloption")}>
                <div className={styles.admininner}>
                    <img src="https://cdn-icons-png.flaticon.com/128/1946/1946488.png" alt="" />
                <h2>Hostel Data</h2> 
                </div>
                {data &&<h3 className={styles.admininnerh3}>{data.hc}</h3>}
             </div>
             <div className={styles.secondadmincard}>
             <div className={styles.admininner}>
                    <img src="https://cdn-icons-png.flaticon.com/128/263/263075.png" alt="" />
                <h2>Review Analysis</h2> 
                </div>
                {data &&<h3 className={styles.admininnerh3}>{data.rc}</h3>}
             </div>
             <div className={styles.thirdadmincard}>
             <div className={styles.admininner}>
                    <img src="https://cdn-icons-png.flaticon.com/128/694/694642.png" alt="" />
                <h2>User Data</h2> 
                </div>
                {data &&<h3 className={styles.admininnerh3}>{data.uc}</h3>}
             </div>
             <div className={styles.fourthadmincard}>
             <div className={styles.admininner}>
                    <img src="https://cdn-icons-png.flaticon.com/128/2702/2702134.png" alt="" />
                <h2>Booking Data</h2> 
                </div>
                {data &&<h3 className={styles.admininnerh3}>{data.bc}</h3>}
             </div>
           </div>
        </div>
    </div>
   )
}
"use client"

import { useRouter } from "next/navigation"
import styles from "./hosteloption.module.css"
import { useEffect, useState } from "react"
import axios from "axios"

export default function HostelopTion()
{
   const [data,setData]=useState<any>()
   const router=useRouter()

   useEffect(()=>{
   fetchhostels()
   },[])

   const fetchhostels=()=>{
    axios.post("http://localhost:8000/viewallhostels").then((responce)=>{
      if(responce.data.success)
      setData(responce.data.data)
    })
   }
    return(
        <div className={styles.hosteloptionwrap}>
          <div className={styles.addhosteladmin} onClick={()=>router.push("/admin/addhostel")}>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/3524/3524384.png" alt="" />
                <h2>Add New Hostel</h2>
            </div>
          </div>
          <div className={styles.adminhosteldiv}>
            {data && data.map((item:any)=>{
             return(
              <div className={styles.hostelwrap}>
             <img className={styles.hostelwrapimg} src={item.hostelimage} alt="" />
             <h1>{item.hostelname}</h1>
             <div className={styles.hostelwrapdiv}>
                <img src="https://cdn-icons-png.flaticon.com/128/855/855003.png" alt="" />
                <p>{item.hosteladdress}</p>
             </div>
             <div className={styles.optiondiv}>
              <img src="https://cdn-icons-png.flaticon.com/128/2356/2356780.png" alt="edit" />
              <img src="https://cdn-icons-png.flaticon.com/128/558/558385.png" alt="" onClick={()=>router.push(`/admin/viewreviews?hostelid=${item._id}`)}/>
              <img src="https://cdn-icons-png.flaticon.com/128/1150/1150592.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/128/484/484662.png" alt="" />
             </div>
            </div>
             )
            })}

            
          </div>
        </div>
    )
}
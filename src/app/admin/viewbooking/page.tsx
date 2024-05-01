"use client"

import { useEffect, useState } from "react"
import styles from "./viewbooking.module.css"
import axios from "axios"

export default function ViewBookings()
{

    const [data,setData]=useState<any>()
   useEffect(()=>{
   callbackend()
   },[])
    const callbackend=()=>{
    axios.post("http://localhost:8000/viewbookings").then((responce)=>{
        if(responce.data.success)
        {
        setData(responce.data.data)
        console.log(responce.data.data)
        }
    })
    }
    return(
        <div className={styles.bookingmainwarp}>
           <h2>All Bookings of Hostels</h2>
           <div className={styles.bookingswrap}>
            {(data && data.length>0)?data.map((item:any)=>{
                return(
                    <div className={styles.bookcard}>
                    <img className={styles.bookcardimg} src={item.hostelid.hostelimage} alt="" />
                    <h3>{item.hostelid.hostelname}</h3>
                    <div className={styles.bookingaddressdiv}>
                      <img src="https://cdn-icons-png.flaticon.com/128/5654/5654521.png" alt="" />
                      <p>{item.hostelid.hosteladdress}</p>
                    </div>
                    <h3>Booked user details</h3>
                    <div className={styles.bookingaddressdiv}>
                      <img src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png" alt="" />
                      <p>{item.userid.username}</p>
                    </div>
                    <div className={styles.bookingaddressdiv}>
                      <img src="https://cdn-icons-png.flaticon.com/128/41/41697.png" alt="" />
                      <p>{item.userid.useremail}, {item.userid.userphoneno}</p>
                    </div>
                    <div className={styles.bookingaddressdiv}>
                      <img src="https://cdn-icons-png.flaticon.com/128/2370/2370264.png" alt="" />
                      <p>{item.userid.createdAt}</p>
                    </div>
                  </div>
                )
            }):<h3>Loading....</h3>}
                

                
           </div>
        </div>
    )
}
"use client"

import { useEffect, useState } from "react"
import styles from "./booking.module.css"
import axios from "axios"

export default function BookingModule()
{
    const [data,setData]=useState<any>()
    const [isBooked,setBooked]=useState<any>(true)

    useEffect(()=>{
    initialrun()
    },[])

    const initialrun=()=>{
        const userid=localStorage.getItem("userid")
        axios.post("http://localhost:8000/viewbookingbyid",{data:userid}).then((responce)=>{
            console.log(responce.data)
            if(responce.data.success)
            {
                setData(responce.data.data)
                setBooked(true)
            }
            else
            setBooked(false)
        })
    }

    return(
        <div className={styles.bookingmainwrap}>
            <div className={styles.bookinginnerdiv}>
                <h2>Here Your Booking</h2>
                <p>Is there any alteration You can contact the owner of hostel</p>
                {(isBooked && data) ? data.map((item:any)=>{
                return(
                    <div className={styles.cardofbooking}>
                    <img className={styles.cardofbookingimg} src={item.hostelid.hostelimage} alt="" />
                    <div className={styles.cardofbookingdiv}>
                     <h3>{item.hostelid.hostelname}</h3>
                     <div className={styles.locationinbooking}>
                        <img src="https://cdn-icons-png.flaticon.com/128/819/819865.png" alt="" />
                        <p>{item.hostelid.hosteladdress}</p>
                     </div>
                     <div className={styles.locationinbooking}>
                        <img src="https://cdn-icons-png.flaticon.com/128/545/545245.png" alt="" />
                        <p>{item.hostelid.hostelcontactno}</p>
                     </div>
                    </div>
                    </div>
                )
                }):<div className={styles.nobookdiv}>
                      <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-search-4320171-3598806.png?f=webp" alt="" />
                      <p>You have'nt Booked any Hostels Yet</p>
                    </div>}
            </div>
        </div>
    )
}
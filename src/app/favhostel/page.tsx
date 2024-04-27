"use client"

import { useEffect, useState } from "react"
import styles from "./favhostel.module.css"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function FavHostel()
{
    const router=useRouter()
    const [favdata,setFavdata]=useState<any>()

    useEffect(()=>{
    loadfavhostels()
    },[favdata])

    const loadfavhostels=()=>{
        const userid=localStorage.getItem("userid")
        axios.post("http://localhost:8000/viewfavbyid",{data:userid}).then((responce)=>{
            if(responce.data.success)
            setFavdata(responce.data.data)
        })
    }

    const deletefavhsotel=(id)=>{
        axios.post("http://localhost:8000/deletefav",{data:id}).then((responce)=>{
            if(responce.data.success)
            toast("Hostel Removed from Favorites Successfully")
            setFavdata("")
        })
    }

    return(
        <div className={styles.favmainwarp}>
          <div className={styles.favwarp}>
            <h2>Here Yours Favorite Hostels</h2>
            <p className={styles.favp}>You just explore the your favorite hostels by just one click</p>
            {favdata && favdata.map((item:any)=>{
            return(
                <div className={styles.favdiv}>
                <img src={item.hostelid.hostelimage} alt="" className={styles.favdivimg} />
                <div onClick={()=>router.push(`/selectedhostel?hostelid=${item.hostelid._id}`)}>
                    <h3>{item.hostelid.hostelname}</h3>
                    <p>{item.hostelid.hosteladdress}</p>
                </div>
              <img className={styles.deletebin} src="https://cdn-icons-png.flaticon.com/128/6711/6711573.png" alt="" onClick={()=>{deletefavhsotel(item._id)}}/>
            </div>
            )
            })}
           
            
          </div>
          <ToastContainer />
        </div>
    )
}
"use client"
import style from "../page.module.css"
import Logo from "../images/logo.png"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import axios,{AxiosResponse} from "axios"
import Cookies from "js-cookie"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Header()
{
    const pathname=usePathname()
    const [isLoggined,setIsloggined]=useState<any>("")
    const [enableprofile,setEnableprofile]=useState(false)
    const router=useRouter()
    useEffect(()=>{
        Verifyuserloggined()
    },[isLoggined,pathname])
    const Verifyuserloggined = () => {
        const userid = localStorage.getItem("userid");
        if (userid) {
          axios
            .post("http://localhost:8000/finduserbyid", { data: userid  })
            .then((responce: AxiosResponse) => {
              if (responce.data.success)
              setIsloggined(responce.data.data)
            });
        }
        else
        setIsloggined("")
      };

      const logoutuser=()=>{
        localStorage.clear()
        setIsloggined("")
        setEnableprofile(false)
        toast("Log out Successfully")
        Cookies.remove("accesstoken")
        Cookies.remove("refreshtoken")
      }

      const profileenablefunction=()=>{
        setEnableprofile(!enableprofile)
      }

      const gotoprofile=()=>{
        const userid=localStorage.getItem("userid")
        if(userid)
        router.push(`/profile?userid=${userid}`)
        setEnableprofile(false)

      }

      const gotoFavhostel=()=>{
        setEnableprofile(false)
        router.push("/favhostel")
      }

      const gotoAddRequest=()=>{
        router.push("/addrequest")
      }

      const gotoYourbooking=()=>{
        router.push("/booking")
        setEnableprofile(false)
      }

      const handleadmin=()=>{
        router.push("/admin/startpage") 
        setEnableprofile(false)
      }

    return(
       <div>{pathname!=="/register" ?<div className={style.headdiv}>
        <Image src={Logo} alt="Logo" className={style.logoimage} onClick={()=>router.push("/")}></Image>
        <div className={style.linkdiv}>
           {isLoggined?<div className={style.logoutdiv}>
            <p>Hello, {isLoggined.username}</p>
            <button onClick={profileenablefunction}>Profile</button>
           </div>:<button onClick={()=>router.push("/register")}>Login</button>} 
            <button onClick={gotoAddRequest}>Add Hostel</button>
        </div>
    </div>:<div></div>}
    <div className={`${style.profilewarp} ${enableprofile ? style.openprofile:style.closeprofile}`}>
     <div className={style.eachprofile} onClick={gotoprofile}>
      <img src="https://cdn-icons-png.flaticon.com/128/64/64572.png" alt="" />
      <p>Profile view/Update</p>
     </div>
     <div className={style.eachprofile} onClick={gotoYourbooking}>
      <img src="https://cdn-icons-png.flaticon.com/128/171/171322.png" alt="" />
      <p>Your Bookings</p>
     </div>
     <div className={style.eachprofile} onClick={gotoFavhostel}>
      <img src="https://cdn-icons-png.flaticon.com/128/1077/1077086.png" alt="" />
      <p>Your Favorites Hostel</p>
     </div>
     {isLoggined.isAdmin && <div className={style.eachprofile} onClick={handleadmin}>
      <img src="https://cdn-icons-png.flaticon.com/128/12724/12724695.png" alt="" />
      <p>Admin Panel</p>
     </div>}
     <div className={style.eachprofile} onClick={logoutuser}>
      <img src="https://cdn-icons-png.flaticon.com/128/4034/4034229.png" alt="" />
      <p>Logout</p>
     </div>
    </div>
    <ToastContainer />
    </div>
        
    )
}
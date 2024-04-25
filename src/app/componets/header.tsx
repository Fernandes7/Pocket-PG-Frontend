"use client"
import style from "../page.module.css"
import Logo from "../images/logo.png"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import axios,{AxiosResponse} from "axios"
import Cookies from "js-cookie"
export default function Header()
{
    const pathname=usePathname()
    const [isLoggined,setIsloggined]=useState<string>("")
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
              setIsloggined(responce.data.data.username)
            });
        }
        else
        setIsloggined("")
      };

      const logoutuser=()=>{
        localStorage.clear()
        setIsloggined("")
        Cookies.remove("accesstoken")
        Cookies.remove("refreshtoken")
      }
    return(
        (pathname!=="/register" ?<div className={style.headdiv}>
        <Image src={Logo} alt="Logo" className={style.logoimage}></Image>
        <div className={style.linkdiv}>
           {isLoggined?<div className={style.logoutdiv}>
            <p>Hello, {isLoggined}</p>
            <button onClick={logoutuser}>Logout</button>
           </div>:<button onClick={()=>router.push("/register")}>Login</button>} 
            <button>Add Hostel</button>
        </div>
    </div>:<div></div>)
        
    )
}
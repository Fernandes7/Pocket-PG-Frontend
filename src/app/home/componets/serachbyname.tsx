import { useRouter } from "next/navigation"
import styles from "../home.module.css"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SearchByName({enablediv})
{
    const router =useRouter()
    const [hostelname,setHostename]=useState("")

    const movetonextpage=()=>{
    if(hostelname=="")
    toast("Enter the name of hostel need to be search")
    else
    {
    router.push(`/home?initial=false&hostelname=${hostelname}`)
    enablediv()
    }
    }

    return(
        <div className={styles.wrapofname}>
            <div className={styles.closename} onClick={enablediv}></div>
            <div className={styles.wrapofnamediv}>
                <h3>Search by Hostel Name</h3>
                <p>Enter the name of the hostels needs to be search</p>
                <input type="text" placeholder="Enter the name of hostel" onChange={(e:any)=>setHostename(e.target.value)}/>
                <button onClick={movetonextpage}>Search Now</button>
            </div>
            <ToastContainer />
        </div>
    )
}
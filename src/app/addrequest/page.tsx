"use client"

import { useState } from "react"
import styles from "./addhostel.module.css"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function AddRequest(){
    const router =useRouter()
     const [isSucess,setIssuccess]=useState(false)
     const [data,setData]=useState<any>({})
     const [loading,setLoading]=useState(false)

     const handle=(e:any)=>{
     setData({...data,[e.target.name]:e.target.value})
     }
     
     const submit=()=>{
     
     const requiredfields=["name","emailid","contactno","location","data"]
     const missing=requiredfields.filter((field)=>!data[field])
     if(missing.length>0)
     toast("Please Fill the all the fileds")
     else
     {
    setLoading(true)
     axios.post("http://localhost:8000/addRequest",{data:data}).then((responce)=>{
        if(responce.data.success)
        {
        setIssuccess(true)
        toast("Request Submitted Successfully")
        }
     })
    }
    }


    return(
         <div className={styles.addhostelwarp}>
        <div className={styles.addhosteldiv}>
            <h1>Be a Part of Pocket PG</h1>
            <p>Just submmit your details here and we will contact you</p>
           {isSucess ?<div>
            <img src="https://res.cloudinary.com/dnvq4niny/image/upload/v1714207038/pngtree-vector-illustration-of-key-to-success-png-image_6668794-removebg-preview_pewz8h.png" alt="" />
            <p>Your Request send Successfully</p>
           </div> :<div>
            <input type="text" placeholder="Enter Your name" name="name" onChange={handle}  />
            <input type="text" placeholder="Enter Your Conatct No" name="contactno" onChange={handle}/>
            <input type="text" placeholder="Enter Your email id" name="emailid" onChange={handle} />
            <input type="text" placeholder="Enter Your Hostel Location" name="location" onChange={handle} />
            <input type="text" placeholder="Decribe the service you are asking" name="data" onChange={handle} />
            </div>}
            {!loading &&<button  onClick={submit}>Submit Your Responce</button>}
            {isSucess && <button onClick={()=>router.push("/")}>Back to Homepage</button>}

        </div>
        <ToastContainer />
    </div>
    )
}
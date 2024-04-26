"use client"

import { useSearchParams } from "next/navigation"
import styles from "./profile.module.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Profile()
{
    const serachparams=useSearchParams()
    const userid=serachparams.get("userid")
    const [data,setData]=useState<any>()
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
    intialuserdata()
    },[])

    const handle=(e:any)=>{
    setData({...data,[e.target.name]:e.target.value})
    }

    const intialuserdata=()=>{
        axios.post("http://localhost:8000/finduserbyid",{data:userid}).then((responce)=>{
            if(responce.data.success)
            setData(responce.data.data)
        })
    }

    const callbackend=()=>{
        setLoading(true)
        axios.post("http://localhost:8000/updateuser",{data:{id:userid,data:data}}).then((responce)=>{
            if(responce.data.success)
            {
            console.log(responce.data.data)
            setData(responce.data.data)
            setLoading(false)
            toast("Profile updated Succesfully")
            }
        })
    }
    return(
        <div className={styles.profilemain}>
            {data &&
            <div className={styles.profilewrap}>
                <img src={data.usergender==="Male"?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuGFjsxZCvbMuKnsJHFywAKXzJh6SsPWVsifY_z36wVT9p38WQ3IQPDPDjhFPDyxv6YQY&usqp=CAU":(data.usergender=="Female"?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFqRUic3zKfF7hU1x62hBJKnvfv75K6f8ERlJ2bx4x9Q&s":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFqRUic3zKfF7hU1x62hBJKnvfv75K6f8ERlJ2bx4x9Q&s")} alt="image" />
                <h2>Hey, {data.username}</h2>
                <p>You can view and update your profile if needed</p>
                <div>
                {loading ? <h3>Uploading your data.....</h3>:
                <div>
                 <input type="text" placeholder="Enter Your Name" name="username" value={data.username} onChange={handle}/>
                 <input type="text" placeholder="Enter your Email id" name="useremail" value={data.useremail} onChange={handle}/>
                 <input type="text" placeholder="Enter your contact no" name="userphoneno"value={data.userphoneno} onChange={handle}/>
                 <input type="text" placeholder="Enter your address" name="useraddress" value={data.useraddress} onChange={handle} />
                 <input type="date" placeholder="Enter your date of Birth" name="userdateofbirth" value={data.userdateofbirth} onChange={handle}/>
                 <input type="text" placeholder="Male or Female" name="usergender" value={data.usergender} onChange={handle} />
                 <input type="text" placeholder="Student or Working" name="usercategory" value={data.usercategory} onChange={handle}/>
                 <button onClick={callbackend}>Save the Fields</button>
                </div>
                }
                </div>
            </div>}
            <ToastContainer />
        </div>
    )
}
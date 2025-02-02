import { useState } from "react"
import styles from "../selected.module.css"
import { useSearchParams } from "next/navigation"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddReview({addreview,success})
{
    const searchparams=useSearchParams()
    const hostelid=searchparams.get("hostelid")
    const [review,setReview]=useState("")
    const [loading,setLoading]=useState(false)

    const handle=()=>{
        if(review!=="")
        {
        setLoading(true)
        const userid=localStorage.getItem("userid")
        axios.post("http://localhost:8000/sentimental",{data:{review:review,hostelid:hostelid,userid:userid}}).then((responce)=>{
        if(responce.data.success)
        {
        success()
        setLoading(false)
        }
        })
        }
        else
        toast("Type Review First")
    }
    return(
        <div>
        {loading ?<h1>Loading</h1>:<div className={styles.addreviewwrap}>
        <img src="https://cdn-icons-png.flaticon.com/128/5254/5254940.png" alt="" className={styles.closeofviewreview} onClick={addreview} />
         <h2>Add the Review to Hostel</h2>
         <p>Yours Reviews are so valuable! Try to give genuine review</p>
         <input type="text" placeholder="Enter Your Review Here" onChange={(e:any)=>setReview(e.target.value)} />
         <button onClick={handle}>Upload Review</button>
        </div>}
        <ToastContainer/>
        </div>
    )
}
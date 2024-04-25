import { useRouter } from "next/navigation"
import styles from "../selected.module.css"
import { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SelectedPageTopbar({hostellocation,liked,hostelid,enableerror}){
    const router=useRouter()
    const [likedhere,setLikedhere]=useState(liked)

    const handleliked=()=>{
        const userid=localStorage.getItem("userid")
        if(userid)
        {
            axios.post("http://localhost:8000/addfavhostel",{data:{hostelid:hostelid,userid:userid}}).then((responce)=>{
                if(responce.data.success)
                setLikedhere(true)
                
            })
        }
        else
        enableerror()
    }
    return(
        <div>
        <div className={styles.topbar}>
                    <div className={styles.backofselected} onClick={()=>router.back()}>
                        <img src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png" alt="arrowimage" />
                        <p>Search the Hostel for out {hostellocation}</p>
                    </div>
                    <div className={styles.icondivselcted}>
                        {likedhere?<img onClick={()=>toast("You already liked this hostel, To unlike go to progile settings")} src="https://cdn-icons-png.flaticon.com/128/14779/14779047.png" alt="redheart" />:<img src="https://cdn-icons-png.flaticon.com/128/707/707680.png" alt="" onClick={handleliked} />}
                        <img src="https://cdn-icons-png.flaticon.com/128/1358/1358023.png" alt="" />
                    </div>
                </div>
                <ToastContainer />
                </div>
    )
}
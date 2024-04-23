import { useRouter, useSearchParams } from "next/navigation"
import styles from "../home.module.css"
import axios from "axios"
import { useEffect, useState } from "react"
export default function DisplayHostels()
{
    const router=useRouter()
    const searchparams=useSearchParams()
    const [hostel,setHosteldata]=useState<any>()

    useEffect(()=>{
        fetchhostelsbasedonlocation()
    },[searchparams])

    const fetchhostelsbasedonlocation=()=>{
        const location=searchparams.get("locationname")
        if(location)
        {
        axios.post("http://localhost:3002/proxyvh",{data:location}).then((responce)=>{
            if(responce.data.success)
            setHosteldata(responce.data.data)
        })
        }
        else
        {
            const hostelname=searchparams.get("hostelname")
            axios.post("http://localhost:8000/sh",{data:{name:hostelname}}).then((responce)=>{
            if(responce.data.success)
            setHosteldata(responce.data.data)
        })
        }
    }
    return(
        <div className={styles.displayhosteldivwrap}>
            <h4>Showing Results for Hostels in {searchparams.get("locationname")} location</h4>
            <div className={styles.sortwrap}>
                <button>Sort By Price</button>
                <button>Sort By Review</button>
                <button>Filter Hostels</button>
            </div>
            <div className={styles.hostelcardwarp}>
                {hostel && hostel.map(({_id,hostelname,hostellocation,hosteltown,hostelimage,hosteltype,hostelrent,hostelinitialrating}:any)=>{
                 return(
                    <div className={styles.hostelcard} key={hostelname} onClick={()=>router.push(`/selectedhostel?hostelid=${_id}`)}>
                    <img src={hostelimage} alt="hostelimage" className={styles.hostelimage} />
                    <div className={styles.hostelcardcontent}>
                       <div className={styles.hostelcardname}>
                       <h3>{hostelname}</h3>
                       <p>{hosteltype} Hostel</p>
                       </div>
                       <div>
                           <img src="https://cdn-icons-png.flaticon.com/128/11515/11515653.png" alt="location image" />
                           <p>{hostellocation},{hosteltown}</p>
                       </div>
                       <div>
                           <img src="https://cdn-icons-png.flaticon.com/128/1828/1828970.png" alt="location image" />
                           <p>4.7,(2567 Reviews)</p>
                       </div>
                       <div className={styles.hostelcardamount}>
                           <div>
                               <img src="https://cdn-icons-png.flaticon.com/128/6366/6366707.png" alt="rsimage" />
                               <h3>{hostelrent}</h3>
                               <p>/ month</p>
                           </div>
                           <img src="https://cdn-icons-png.flaticon.com/128/545/545682.png" alt="" />
                       </div>
                    </div>
                   </div>
                 )
                })}
                
            </div>
        </div>
    )
}
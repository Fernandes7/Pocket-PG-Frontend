import { useEffect, useState } from "react"
import styles from "../home.module.css"
import axios from "axios"
import { useRouter } from "next/navigation"
interface myprops{
    enablesearch:()=>void
}
export default function SearchByLocation(props:myprops)
{
    const [locations,SetLocations]=useState([])
    const [searchdata,setSearchdata]=useState<any>("")
    const router=useRouter()
    useEffect(()=>{
    fetchlocation()
    },[])
    const fetchlocation=()=>{
        axios.get("http://localhost:8000/viewlocation").then((responce)=>{
        if(responce.data.success)
        SetLocations(responce.data.data)
        })
    }
    const searchhostelbylocationroutefunction=(locationname:string)=>{
        props.enablesearch()
        window.location.reload()
        router.push(`/home?initial=false&locationname=${locationname}`)
    }
    return(
        <div className={styles.searchbylocationdiv}>
            <div className={styles.blocker} onClick={props.enablesearch}></div>
            <div className={styles.searchdivwrap}>
              <input type="text" placeholder="Enter the Location of hostel to search" onChange={(e:any)=>setSearchdata(e.target.value)}/>
              <div className={styles.locationdatadiv}>
                {locations.filter(({locationname}:any)=>{
                    const smallletterlocation=locationname.toLowerCase()
                    const smallsearchdata=searchdata.toLowerCase()
                    return smallsearchdata ? smallletterlocation.startsWith(smallsearchdata):locationname
                }).map(({locationname})=>{
                    return(
                        <div onClick={()=>searchhostelbylocationroutefunction(locationname)} key={locationname}>
                        <img src="https://cdn-icons-png.flaticon.com/128/9800/9800512.png" alt="" />
                        <p>{locationname}</p>
                        </div>
                    )
                })}
              </div>
            </div>
        </div>
    )
}
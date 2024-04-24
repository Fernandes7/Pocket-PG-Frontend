import { useRouter, useSearchParams } from "next/navigation"
import styles from "../home.module.css"
import axios from "axios"
import { useEffect, useState } from "react"
import DisplaymapHostels from "./displaycardhostel"
export default function DisplayHostels()
{
    const searchparams=useSearchParams()
    const [hostel,setHosteldata]=useState<any>([])
    const [openpricesort,setOpenpricesoart]=useState(false)
    const [openrateingsort,setOpenratingsort]=useState(false)
    const [sortenable,setSortenable]=useState(false)
    const [sorteddata,setsorteddata]=useState<any>()

    useEffect(()=>{
        fetchhostelsbasedonlocation()
        setSortenable(false)
    },[searchparams])

    const opensortpricefunction=()=>{
        setOpenpricesoart(!openpricesort)
        setOpenratingsort(false)
    }

    const openrateingsortfunction=()=>{
        setOpenratingsort(!openrateingsort)
        setOpenpricesoart(false)
    }

    const sorthosteldatafunction=(order:boolean,type:string)=>{
    setSortenable(true)
    setOpenpricesoart(false)
    if(!order)
    {
    const sorthostel=[...hostel].sort((a,b)=>a[type]-b[type])
    setsorteddata(sorthostel)
    }
    else
    {
        const sorthostel=[...hostel].sort((a,b)=>b[type]-a[type])
        setsorteddata(sorthostel)
    }
    }

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
                <div className={`${styles.cleardiv} ${sortenable?styles.color:styles.noncolor}`} onClick={()=>setSortenable(false)}>Clear all Options</div>
                <button onClick={opensortpricefunction}>Sort By Price</button>
                <button onClick={openrateingsortfunction}>Sort By Review</button>
                <button>Filter Hostels</button>
            </div>
            <div className={`${styles.sortrent} ${openpricesort?styles.open:styles.close}`}>
                <h2>Select the type of sort</h2>
                <button onClick={()=>sorthosteldatafunction(false,"hostelrent")}>Low to High</button>
                <button onClick={()=>sorthosteldatafunction(true,"hostelrent")}>High to low</button>
            </div>
            <div className={`${styles.sortrent} ${openrateingsort?styles.open:styles.close}`}>
                <h2>Select the type of Rating Sort</h2>
                <button onClick={()=>sorthosteldatafunction(false,"hostelinitialrating")}>Lowest rating first</button>
                <button onClick={()=>sorthosteldatafunction(true,"hostelinitialrating")}>Highest rating first</button>
            </div>
            <div className={styles.hostelcardwarp}>
                {sortenable ? 
                (sorteddata && sorteddata.map(({_id,hostelname,hostellocation,hosteltown,hostelimage,hosteltype,hostelrent,hostelinitialrating}:any)=>{
                    return(
                      <DisplaymapHostels _id={_id} hostelimage={hostelimage} hostelname={hostelname} hostellocation={hostellocation} hosteltown={hosteltown} hosteltype={hosteltype} hostelrent={hostelrent}/>
                    )
                   }))
                   :(hostel && hostel.map(({_id,hostelname,hostellocation,hosteltown,hostelimage,hosteltype,hostelrent,hostelinitialrating}:any)=>{
                 return(
                   <DisplaymapHostels _id={_id} hostelimage={hostelimage} hostelname={hostelname} hostellocation={hostellocation} hosteltown={hosteltown} hosteltype={hosteltype} hostelrent={hostelrent}/>
                 )
                }))}
                
            </div>
        </div>
    )
}
import { useRouter, useSearchParams } from "next/navigation"
import styles from "../home.module.css"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import DisplaymapHostels from "./displaycardhostel"
import RentSort from "./rentsort"
import PrizeSort from "./pricesort"
import FilteroptionDiv from "./filteroptiondiv"
export default function DisplayHostels()
{
    const searchparams=useSearchParams()
    const [hostel,setHosteldata]=useState<any>([])
    const [openpricesort,setOpenpricesoart]=useState(false)
    const [openrateingsort,setOpenratingsort]=useState(false)
    const [sortenable,setSortenable]=useState(false)
    const [openfilter,setOpenfilter]=useState(false)
    const [sorteddata,setsorteddata]=useState<any>()
    const [filteroption,setFilterOPtion]=useState({hosteltype:"",Wifi:"",Ac:"",available:""})

    useEffect(()=>{
        fetchhostelsbasedonlocation()
        setSortenable(false)
        setsorteddata([])
    },[searchparams])

    const opensortpricefunction=()=>{
        setOpenpricesoart(!openpricesort)
        setOpenratingsort(false)
        setOpenfilter(false)
    }

    const openrateingsortfunction=()=>{
        setOpenratingsort(!openrateingsort)
        setOpenpricesoart(false)
        setOpenfilter(false)
    }

    const sorthosteldatafunction=(order:boolean,type:string)=>{
    setSortenable(true)
    setOpenpricesoart(false)
    setOpenratingsort(false)
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
            setHosteldata([])
        axios.post("http://localhost:3002/proxyvh",{data:location}).then((responce)=>{
            if(responce.data.success)
            setHosteldata(responce.data.data)
        })
        }
        else
        {
            const hostelname=searchparams.get("hostelname")
            setHosteldata([])
            axios.post("http://localhost:8000/sh",{data:{name:hostelname}}).then((responce)=>{
            if(responce.data.success)
            setHosteldata(responce.data.data)
        })
        }
    }

    const openfilterfunction=()=>{
        setOpenfilter(!openfilter)
        setOpenpricesoart(false)
        setOpenratingsort(false)
    }

    const handlefilter=(e:any)=>{
        setFilterOPtion({...filteroption,[e.target.name]:e.target.value})
    }

    const addafilterfunction=()=>{
        
    if(sorteddata.length>0)
    {
        const filterdata=sorteddata.filter((item:any)=>{
            return(
               ( (filteroption.hosteltype==="" || item.hosteltype===filteroption.hosteltype)&&(filteroption.Wifi==="" || item.Wifi===filteroption.Wifi)&&(filteroption.Ac==="" || item.Ac===filteroption.Ac)&&(filteroption.available===""||(filteroption.available=="yes"?item.availablerooms>0:item.availablerooms===0)))
            )
        })
        setsorteddata(filterdata)
    }
    else
    {
      const filterdata=hostel.filter((item:any)=>{

            return ((filteroption.hosteltype==="" || item.hosteltype===filteroption.hosteltype)&&(filteroption.Wifi==="" || item.Wifi===filteroption.Wifi)&&(filteroption.Ac==="" || item.Ac===filteroption.Ac))
        })
        setsorteddata(filterdata)  
    }
    setSortenable(true)
    setOpenfilter(false)
    }

    const clearall=()=>{
    setSortenable(false)
    }
    return(
        <div className={styles.displayhosteldivwrap}>
            <h4>Showing Results for Hostels in {searchparams.get("locationname")?searchparams.get("locationname"):"with name "+searchparams.get("hostelname")+" of all"} location</h4>
            <div className={styles.sortwrap}>
                <div className={`${styles.cleardiv} ${sortenable?styles.color:styles.noncolor}`} onClick={clearall}>Clear all Options</div>
                <button onClick={opensortpricefunction}>Sort By Price</button>
                <button onClick={openrateingsortfunction}>Sort By Review</button>
                <button onClick={openfilterfunction}>Filter Hostels</button>
            </div>
           <PrizeSort sorthosteldatafunction={sorthosteldatafunction} openpricesort={openpricesort} />
           <RentSort  sorthosteldatafunction={sorthosteldatafunction} openrateingsort={openrateingsort}/>
           <FilteroptionDiv addafilterfunction={addafilterfunction} handlefilter={handlefilter} openfilter={openfilter}/>
           
            <div className={styles.hostelcardwarp}>
                {sortenable ? 
                ((sorteddata && sorteddata.length>0) ? sorteddata.map(({_id,hostelname,hostellocation,hosteltown,hostelimage,hosteltype,hostelrent,hostelinitialrating,availablerooms}:any)=>{
                    return(
                      <DisplaymapHostels _id={_id} hostelimage={hostelimage} hostelname={hostelname} hostellocation={hostellocation} hosteltown={hosteltown} hosteltype={hosteltype} hostelrent={hostelrent} availablerooms={availablerooms}/>
                    )
                   }):<div className={styles.sorrydiv}>
                    <img src="https://t3.ftcdn.net/jpg/01/51/57/66/360_F_151576654_IuN8FA80e6scZOf9MSmnjC65l99K2hyA.jpg" alt="imagesso"  />
                    <h1>Sorry Currently no hostels avaliable in this selection</h1>
                    <p>We will let you Know when avilable</p>
                    </div>)
                   :((hostel && hostel.length>0) ? hostel.map(({_id,hostelname,hostellocation,hosteltown,hostelimage,hosteltype,hostelrent,hostelinitialrating,availablerooms}:any)=>{
                 return(
                   <DisplaymapHostels _id={_id} hostelimage={hostelimage} hostelname={hostelname} hostellocation={hostellocation} hosteltown={hosteltown} hosteltype={hosteltype} hostelrent={hostelrent} availablerooms={availablerooms}/>
                 )
                }):<div className={styles.sorrydiv}>
                <img src="https://t3.ftcdn.net/jpg/01/51/57/66/360_F_151576654_IuN8FA80e6scZOf9MSmnjC65l99K2hyA.jpg" alt="imagesso" />
                <h1>Sorry Currently no hostels avaliable in this selection !</h1>
                <p>We will let you Know when avilable</p>
                </div>)}
                
            </div>
        </div>
    )
}
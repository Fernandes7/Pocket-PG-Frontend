import { useRouter, useSearchParams } from "next/navigation"
import styles from "../home.module.css"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import DisplaymapHostels from "./displaycardhostel"
import RentSort from "./rentsort"
import PrizeSort from "./pricesort"
export default function DisplayHostels()
{
    const searchparams=useSearchParams()
    const [hostel,setHosteldata]=useState<any>([])
    const [openpricesort,setOpenpricesoart]=useState(false)
    const [openrateingsort,setOpenratingsort]=useState(false)
    const [sortenable,setSortenable]=useState(false)
    const [openfilter,setOpenfilter]=useState(false)
    const [sorteddata,setsorteddata]=useState<any>()
    const [filteroption,setFilterOPtion]=useState({hosteltype:"",Wifi:"",Ac:""})

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
               ( (filteroption.hosteltype==="" || item.hosteltype===filteroption.hosteltype)&&(filteroption.Wifi==="" || item.Wifi===filteroption.Wifi)&&(filteroption.Ac==="" || item.Ac===filteroption.Ac))
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
           
           <div className={`${styles.filteroptionwrap} ${openfilter? styles.openfilter:styles.closefilter}`}>
            <h2>Filter Options</h2>
            <p>Select the options you want to filter</p>
            <div className={styles.optiononewrap}>
                <div>
                    <input type="radio" name="hosteltype" value="Men" onChange={handlefilter} />
                    <label>Men</label>
                </div>
                 <div>
                    <input type="radio" name="hosteltype" value="Women" onChange={handlefilter}/>
                    <label>Women</label>
                </div>
            </div>
            <div className={styles.optiononewrap}>
                <div>
                    <input type="radio" name="Ac" value="yes" onChange={handlefilter}/>
                    <label>Ac</label>
                </div>
                 <div>
                    <input type="radio" name="Ac" value="no"  onChange={handlefilter}/>
                    <label>Non Ac</label>
                </div>
            </div>
            <div className={styles.optiononewrap}>
                <div>
                    <input type="radio" name="Wifi" value="yes" onChange={handlefilter} />
                    <label>Wifi</label>
                </div>
                 <div>
                    <input type="radio" name="Wifi" value="No" onChange={handlefilter} />
                    <label>Non Wifi</label>
                </div>
            </div>
            <button onClick={addafilterfunction}>Apply Filter</button>
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
"use client"

import { useEffect, useState } from "react"
import AmentiesandNaerbylocation from "./comonents/amentiesandnearby"
import HostelnameDetails from "./comonents/hostelnamedetails"
import ImagesDivofSelectedHostel from "./comonents/imagesdiv"
import PolicyandSimilarHostels from "./comonents/policyandsuggesion"
import SelectedPageTopbar from "./comonents/selctedtopbar"
import ViewReviews from "./comonents/viewReviews"
import styles from "./selected.module.css"
import AddReview from "./comonents/addReview"
import Customizeprice from "./comonents/customizeprice"
import { useSearchParams } from "next/navigation"
import axios from "axios"

export default function SelectedHostel()
{
    const [openViewReview,setViewReview]=useState(false)
    const [openAddReview,setAddReview]=useState(false)
    const [openCustomize,setCustomize]=useState(false)
    const [hostelrent,setHostelrent]=useState<any>()
    const [servicescustomized,setServicescustomized]=useState<any>([])
    const [data,setData]=useState<any>()
    const [similarhsoteldata,setsimilarHosteldata]=useState()
    const searchParams=useSearchParams()
    const hostelid=searchParams.get("hostelid")

    useEffect(()=>{
    fetchdata()
    },[searchParams])

    const fetchdata=()=>{
        const userid=localStorage.getItem("userid")
        axios.post("http://localhost:8000/viewhostelbyid",{data:{hostelid:hostelid,userid:userid}}).then((responce)=>{
            if(responce.data.success)
            {
            setData(responce.data.data)
            setHostelrent(responce.data.data.hostelrent)
            setsimilarHosteldata(responce.data.similarhostel)
            }
        })
    }

    const handleservices=(services:any)=>{
        setServicescustomized(services)
        console.log(servicescustomized)
    }

    const handlereview=()=>{
        setAddReview(false)
        if(openViewReview===false)
        setViewReview(true)
        else
        setViewReview(false)
    }

    const handleaddreview=()=>{
        setAddReview(!openAddReview)
        setViewReview(false)
        setCustomize(false)
    }

    const handlecustomize=()=>{
        if(openCustomize==true)
        {
        setCustomize(false)
        }
        else
        {
            setCustomize(true)
        }
        setAddReview(false)
        setViewReview(false)
    }

    const hostelrenthandle=(calc:boolean,value:any)=>{
    if(calc)
    setHostelrent(parseInt(hostelrent)-parseInt(value))
    else
    setHostelrent(parseInt(hostelrent)+parseInt(value))
    }
    return(
        <div className={styles.selectedbg}>
            {(data && hostelrent) ?
            <div className={styles.selctedinnerbg}>
                <SelectedPageTopbar hostellocation={data.hostellocation} />
                <ImagesDivofSelectedHostel hostelimage={data.hostelimage} images={data.hostelimagelinks} />
                <HostelnameDetails handlecustomize={handlecustomize} hostelcontactno={data.hostelcontactno} hostelname={data.hostelname} hostelemail={data.hostelemail} hostelrent={hostelrent} hosteltype={data.hosteltype} pricecustomization={data.pricecustomization} hosteladdress={data.hosteladdress} enabletext={servicescustomized && servicescustomized.length>0?true:false}/>
                <AmentiesandNaerbylocation handlereviews={handlereview} addreview={handleaddreview} amenties={data.hostelservices} nearbylocations={data.nearbylocations}/>
                <PolicyandSimilarHostels visitorallowed={data.visitorallowed} gateclosetime={data.gateclosetime} warden={data.warden} noticeperiod={data.noticeperiod} restrictions={data.restrictions} prohibitions={data.prohibitions} securitydeposite={data.securitydeposite} similarhostel={similarhsoteldata}/>
                {openViewReview && <ViewReviews handlereviews={handlereview}/>}
                {openAddReview && <AddReview addreview={handleaddreview}/>}
                {openCustomize && <Customizeprice addcustomize={handlecustomize} data={data} hostelrenthandle={hostelrenthandle} handleservices={handleservices} servicesadded={servicescustomized}/>}
            </div>
:<h1>loading....</h1>}
        </div>
    )
}
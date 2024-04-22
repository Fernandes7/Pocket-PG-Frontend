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
import ComformBooking from "./comonents/comformBooking"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function SelectedHostel()
{
    const [openViewReview,setViewReview]=useState(false)
    const [openAddReview,setAddReview]=useState(false)
    const [openCustomize,setCustomize]=useState(false)
    const [isliked,setIsliked]=useState()
    const [openConformbooking,setOpenConformBooking]=useState(false)
    const [hostelrent,setHostelrent]=useState<any>()
    const [servicescustomized,setServicescustomized]=useState<any>([])
    const [data,setData]=useState<any>()
    const [similarhsoteldata,setsimilarHosteldata]=useState()
    const [loading,setLoading]=useState(false)
    const [errordiv,setErrordiv]=useState(false)
    const searchParams=useSearchParams()
    const hostelid=searchParams.get("hostelid")

    useEffect(()=>{
    fetchdata()
    },[ searchParams])

    const fetchdata=()=>{
        const userid=localStorage.getItem("userid")
        axios.post("http://localhost:8000/viewhostelbyid",{data:{hostelid:hostelid,userid:userid}}).then((responce)=>{
            if(responce.data.success)
            {
            setData(responce.data.data)
            setHostelrent(responce.data.data.hostelrent)
            setsimilarHosteldata(responce.data.similarhostel)
            setIsliked(responce.data.isliked)
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

    const successfullreviewadd=()=>{
        toast("Review added Successfully")
    }

    const handleaddreview=()=>{
        const userid=localStorage.getItem("userid")
        if(userid)
        setAddReview(!openAddReview)
        else
        setErrordiv(true)
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

    const handleconformbooking=async()=>{
        const userid=localStorage.getItem("userid")
        if(userid)
        {
        setErrordiv(false)
        setOpenConformBooking(!openConformbooking)
        }
        else
        setErrordiv(true)
        
    }

    const enableerrorfunction=()=>{
        setErrordiv(true)
    }

    const hostelrenthandle=(calc:boolean,value:any)=>{
    if(calc)
    setHostelrent(parseInt(hostelrent)-parseInt(value))
    else
    setHostelrent(parseInt(hostelrent)+parseInt(value))
    }

    const showtost=(str:string)=>{
        toast(str)
    }

    return(
        <div className={styles.selectedbg}>
            <ToastContainer />
            <div onClick={()=>setErrordiv(false)}className={`${styles.errordiv} ${errordiv?styles.openerror:styles.closeerror}`}>
             <img src="https://t4.ftcdn.net/jpg/01/22/60/61/360_F_122606193_Gf37Axx1LjsZkhxUQ2retG2oakjLQ3ZW.jpg" alt="" />
             <p>You need to Register First,Then Explore this Feature</p>
             <p>Click here to close</p>
            </div>
            {(data && hostelrent) ?
            <div className={styles.selctedinnerbg}>
                <SelectedPageTopbar enableerror={enableerrorfunction} hostellocation={data.hostellocation} liked={isliked} hostelid={data._id} />
                <ImagesDivofSelectedHostel hostelimage={data.hostelimage} images={data.hostelimagelinks} />
                <HostelnameDetails handle={handleconformbooking} handlecustomize={handlecustomize} hostelcontactno={data.hostelcontactno} hostelname={data.hostelname} hostelemail={data.hostelemail} hostelrent={hostelrent} hosteltype={data.hosteltype} pricecustomization={data.pricecustomization} hosteladdress={data.hosteladdress} enabletext={servicescustomized && servicescustomized.length>0?true:false}/>
                <AmentiesandNaerbylocation handlereviews={handlereview} addreview={handleaddreview} amenties={data.hostelservices} nearbylocations={data.nearbylocations}/>
                <PolicyandSimilarHostels visitorallowed={data.visitorallowed} gateclosetime={data.gateclosetime} warden={data.warden} noticeperiod={data.noticeperiod} restrictions={data.restrictions} prohibitions={data.prohibitions} securitydeposite={data.securitydeposite} similarhostel={similarhsoteldata}/>
                {openViewReview && <ViewReviews handlereviews={handlereview}/>}
                {openAddReview && <AddReview addreview={handleaddreview} success={successfullreviewadd}/>}
                {openCustomize && <Customizeprice addcustomize={handlecustomize} data={data} hostelrenthandle={hostelrenthandle} handleservices={handleservices} servicesadded={servicescustomized}/>}
                {openConformbooking &&<ComformBooking hostelimage={data.hostelimage} hosteladdress={data.hosteladdress} hostelname={data.hostelname} hostelrent={hostelrent} hostelservices={servicescustomized} handle={handleconformbooking}  showtost={showtost} hostelid={data._id} handleconformbooking={handleconformbooking}/>}
            </div>
:<h1>loading....</h1>}
        </div>
    )
}
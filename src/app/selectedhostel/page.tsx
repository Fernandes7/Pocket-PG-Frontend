"use client"

import { useState } from "react"
import AmentiesandNaerbylocation from "./comonents/amentiesandnearby"
import HostelnameDetails from "./comonents/hostelnamedetails"
import ImagesDivofSelectedHostel from "./comonents/imagesdiv"
import PolicyandSimilarHostels from "./comonents/policyandsuggesion"
import SelectedPageTopbar from "./comonents/selctedtopbar"
import ViewReviews from "./comonents/viewReviews"
import styles from "./selected.module.css"
import AddReview from "./comonents/addReview"
import Customizeprice from "./comonents/customizeprice"

export default function SelectedHostel()
{
    const [openViewReview,setViewReview]=useState(false)
    const [openAddReview,setAddReview]=useState(false)
    const [openCustomize,setCustomize]=useState(false)

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
        setCustomize(!openCustomize)
        setAddReview(false)
        setViewReview(false)
    }
    return(
        <div className={styles.selectedbg}>
            <div className={styles.selctedinnerbg}>
                <SelectedPageTopbar />
                <ImagesDivofSelectedHostel />
                <HostelnameDetails handlecustomize={handlecustomize} />
                <AmentiesandNaerbylocation handlereviews={handlereview} addreview={handleaddreview}/>
                <PolicyandSimilarHostels />
                {openViewReview && <ViewReviews handlereviews={handlereview}/>}
                {openAddReview && <AddReview addreview={handleaddreview}/>}
                {openCustomize && <Customizeprice addcustomize={handlecustomize}/>}
            </div>
        </div>
    )
}
import { useEffect, useState } from "react"
import styles from "../selected.module.css"
import axios from "axios"
import { useSearchParams } from "next/navigation"

export default function ViewReviews({handlereviews})
{
    const imogi={
        5:"https://cdn-icons-png.flaticon.com/128/1791/1791320.png" ,
        3.5:"https://cdn-icons-png.flaticon.com/128/742/742751.png",
        2:"https://cdn-icons-png.flaticon.com/128/4160/4160721.png",
        .5:"https://cdn-icons-png.flaticon.com/128/742/742752.png"
    }
    const [review,setReview]=useState<any>()
    const searchParams=useSearchParams()
    const hostelid=searchParams.get("hostelid")

    useEffect(()=>{
    fetchreview()
    },[])

    const fetchreview=()=>{
        axios.post("http://localhost:8000/vhh",{data:hostelid}).then((responce)=>{
            if(responce.data.success)
            {
                console.log(responce.data.data)
                setReview(responce.data.data)
            }
        })
    }
    return(
        <div className={styles.viewwrap}>
          <img src="https://cdn-icons-png.flaticon.com/128/5254/5254940.png" alt="" className={styles.closeofviewreview} onClick={handlereviews} />
          <h2>Review Details Added</h2>
          <h4>This are the reviews added by the differnt registerd users</h4>
          <div className={styles.wrapofreview}>
            {(review && review.length>0) ? review.map(({hostelreview,key}:any)=>{
                return(
                <div key={key}>
                <img src={imogi[hostelreview[0].score]} alt="" />
                <p>{hostelreview[0].review}</p>
            </div>
                )
            }):<h3 style={{fontFamily:"Raleway",fontWeight:400,color:"red"}}>No reviews Added Yet...</h3>}
            
          </div>
        </div>
    )
}
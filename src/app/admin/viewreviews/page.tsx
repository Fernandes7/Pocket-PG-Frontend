"use client"
import { useEffect, useState } from "react"
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";
import styles from "./viewreviews.module.css"
import { useSearchParams } from "next/navigation";

Chart.register(CategoryScale);

export default  function ViewRevies()
{
  const [sentimetaldata,setSentimentaldata]=useState<any>()
  const [Graphdata,setGraphdata]=useState<any>()
  const [Reviewdata,setReviewdata]=useState<any>()
  const searchparams=useSearchParams()

  const hostelid=searchparams.get("hostelid")

  useEffect(()=>{
  fetchgraphdata()
  },[])

  useEffect(()=>{
  setDataofGraph()
  },[sentimetaldata])

  const fetchgraphdata=()=>{
    axios.post("http://localhost:8000/vs",{data:hostelid}).then((responce)=>{
      if(responce.data.success)
      console.log(responce.data)
       setSentimentaldata(responce.data.data[0])
    })
    axios.post("http://localhost:8000/vhh",{data:hostelid}).then((responce)=>{
      if(responce.data.success)
       setReviewdata(responce.data.data)
    })

  }
  const setDataofGraph=()=>{
  if(sentimetaldata)
  console.log(sentimetaldata.previouspredictedrating)
  if(sentimetaldata && sentimetaldata.truereview && sentimetaldata.previouspredictedrating)
  {
    setGraphdata({
      labels:  sentimetaldata.truereview.map((data:any) => data.review), 
      datasets: [
        {
          label: "Users Gained ",
          data: sentimetaldata.truereview.map((data:any) => data.score),
          backgroundColor: [
            "rgba(75,192,192,1)",
          ],
          borderColor: "black",
          borderWidth: 2
        },
        {
          label: "Predicted Data ",
          data: sentimetaldata.previouspredictedrating.map((data:any) => data),
          backgroundColor: [
            "white",
          ],
          borderColor: "red",
          borderWidth: .5
        }
      ]
    })
  }
  }
  return(
    <div className={styles.mainreviewdiv}>
    <div className={styles.reviewwrap}>
    <div className={styles.reviewdiv}>
      <h1>Reviews</h1>
      {Reviewdata ? Reviewdata.map((item)=>{
        return (
           <div className={ `${styles.reviewwrapdiv} ${styles[`score${item.hostelreview[0].score}`]}`}>
        <div className={styles.user}>
          <p>{item.userid.username}</p>
          <p>{item.createdAt}</p>
        </div>
          <p className={styles.reviewp}>{item.hostelreview[0].review} </p>
      </div>
        )
      }):<p>No Reviews added Yet</p>}

    </div>
    {Graphdata ? <div className={styles.graphdiv}>
       <h2 style={{ textAlign: "center" }}>Review Chart Analysis</h2>
       <Line
        data={Graphdata}
        options={{
          maintainAspectRatio:false,
          plugins: {
            title: {
              display: false,
              text: "Review Analysis of Hostel Name"
            },
            legend: {
              display: false
            }
          }
        }}
      />
      <div className={styles.symbolwarp}>
        <div className={styles.symboldiv}>
          <div className={styles.blackdiv}></div>
          <p>Actual Rating Representing line</p>
        </div>
        <div className={styles.symboldiv}>
          <div className={styles.reddiv}></div>
          <p>Predicted Rating Representing line</p>
        </div>
      </div>
    </div>:<p>Add Some reviews to view Chart</p>}
    </div>
    </div>
  )
}
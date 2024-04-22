import axios from "axios"
import styles from "../selected.module.css"
import { Hourglass } from "react-loader-spinner"
import { useState } from "react"

export default function ComformBooking({hostelimage,hostelname,hostelrent,hosteladdress,hostelservices,handle,showtost,hostelid,handleconformbooking}){

  const[loadings,setLoading]=useState(false)
  const checkbooking=()=>{
   const userid=localStorage.getItem("userid")
        if(userid)
        {
        let customize:boolean
        if(hostelservices.length>0)
        customize=true
        else
        customize=false
        setLoading(true)
        try{
        axios.post("http://localhost:8000/addbooking",{data:{hostelid:hostelid,userid:userid,customize:customize,customizeservices:hostelservices}}).then((responce)=>{
            if(responce.data.success)
            {
            setLoading(false)
            handleconformbooking()
            showtost("Your Booking is Successfull")
            }
            else
            {
                showtost(responce.data.data)
                setLoading(false)
                return
            }
        })
    }catch(e)
    {
        return e
    }
    } 
  }
    return(
    <div>
    <div className={styles.conformwarp}>
      {!loadings? <div>
        <img src="https://cdn-icons-png.flaticon.com/128/5254/5254940.png" alt="" className={styles.closeofviewreview} onClick={handle} />
     <h1>Conform Your Booking</h1>
     <img className={styles.conformwarpimg} src={hostelimage} alt="" />
     <div className={styles.conformdiv}>
     <h2>{hostelname}</h2>
     <p>Rs {hostelrent}/- Month</p>
     </div>
     <div className={styles.addresscomform}>
        <img className={styles.icon} src="https://cdn-icons-png.flaticon.com/128/3425/3425073.png" alt="" />
        <p>{hosteladdress}</p>
     </div>
     <div className={styles.priceconform}>
     <div>
        <p className={styles.pricehead}>Price Customized</p>
        {hostelservices &&hostelservices.length>0 ? hostelservices.map((item:any,key:any)=>{
            return(
                <div className={styles.servicesdiv} key={key}>
                <p>No {item} Facility</p>
               </div>  
            )
        }):<p>Nothing is customized</p>}
        </div>
      <button onClick={checkbooking} >Conform Booking</button>
     </div>
    </div>
      :<Hourglass
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
  />}
     </div>
    </div>
    )
}
import ReactSwitch from "react-switch"
import styles from "../selected.module.css"
import { useState } from "react"

export default function Customizeprice({addcustomize,data,hostelrenthandle,handleservices,servicesadded})
{
    console.log(data)
    const services=data.customservices.split(",")
    const [ckecked,setChecked]=useState([])

    const handle=(key:any,cost:any)=>{
     if(servicesadded.includes(key))
     {
        handleservices(servicesadded.filter((item)=>item!=key))
        hostelrenthandle(false,cost)
     }
     else
     {
     handleservices([...servicesadded,key])
     hostelrenthandle(true,cost)
     }
    }

    return(
        <div className={styles.customwrap}>
            <img src="https://cdn-icons-png.flaticon.com/128/5254/5254940.png" alt="" className={styles.closeofviewreview} onClick={addcustomize} />
        <h2>Here You Can Customize the Services</h2>
        <h3>The Amount will be Reduced based on your Selction</h3>
        <div className={styles.flexofcustomize}>
            {services && services.map((item:any,key:any)=>{
                return(
                    <div className={styles.customizediv} key={key}>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/128/3322/3322854.png" alt="" />
                        <p>{item} - {data[item]}rs/Month</p>
                    </div>
                    <ReactSwitch onChange={()=>handle(item,data[item])} checked={servicesadded.includes(item)?false:true} className={styles.toggle}/>
                </div>
                )
            })}
           <button className={styles.savecustomprice} onClick={addcustomize}>Save the Price</button>
        </div>
        </div>
    )
}
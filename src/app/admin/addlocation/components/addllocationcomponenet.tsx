"use client"

import axios from "axios"
import { tree } from "next/dist/build/templates/app-page"
import { useState } from "react"

export default function Addlocationcomponets()
{
    interface Datatype{
    locationname?:string
    image?:any
    }
    const [data,Setdata]=useState<Datatype>({})
    const [loading,Setloading]=useState(false)
    const handletextdata=(event:React.ChangeEvent<HTMLInputElement>)=>{
    Setdata({...data,[event.target.name]:event.target.value})
    }

    const handleimage=(event:any)=>{
      Setdata({...data,[event.target.name]:event.target.files[0]})  
    }

    const Senddatatobackend=()=>{
        Setloading(true)
        const datapasstobackend=new FormData()
        datapasstobackend.append("locationname",data.locationname!)
        datapasstobackend.append("image",data.image)

        axios.post("http://localhost:8000/addlocation",datapasstobackend).then((responce)=>{
            Setloading(false)
            if(responce.data.success)
            {
            alert("Image and data uploded successfully")
            }
            else
            alert("Failed to upload data")
        })
    }
    
    return(
        <div>
            <input type="Enter the location Name" name="locationname" onChange={handletextdata}/><br />
            <input type="file" name="image" onChange={handleimage}></input>
            {loading && <h4>Loading</h4>} <br />
            <button onClick={Senddatatobackend}>Upload data</button>
        </div>
    )
}
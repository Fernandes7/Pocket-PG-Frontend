"use client"

import axios from "axios"
import { useState } from "react"

export default function AddHostelcomponets()
{
    interface Datatype{
    hostelname?:string
    hostellocation?:string,
    hosteltown?:string,
    hostelrent?:string,
    hostellatitude?:string,
    hostellongitude?:string,
    hosteltype?:string
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
        datapasstobackend.append("hostelname",data.hostelname!)
        datapasstobackend.append("image",data.image)
        datapasstobackend.append("hostellocation",data.hostellocation!)
        datapasstobackend.append("hosteltown",data.hosteltown!)
        datapasstobackend.append("hostelrent",data.hostelrent!)
        datapasstobackend.append("hostellatitude",data.hostellatitude!)
        datapasstobackend.append("hostellongitude",data.hostellongitude!)
        datapasstobackend.append("hosteltype",data.hosteltype!)

        axios.post("http://localhost:8000/addhostel",datapasstobackend).then((responce)=>{
            Setloading(false)
            if(responce.data.success)
            {
            alert("Hostel data uploaded successfully")
            }
            else
            alert("Failed to upload image and data of Hostels")
        })
    }
    
    return(
        <div>
            <input type="text" placeholder="Enter the Hostel Name" name="hostelname" onChange={handletextdata}/><br />
            <input type="text" placeholder="Enter the Hostel Location" name="hostellocation" onChange={handletextdata}/><br />
            <input type="text" placeholder="Enter the Hostel town" name="hosteltown" onChange={handletextdata}/><br />
            <input type="file" name="image" onChange={handleimage}></input><br />
            <input type="number" placeholder="Enter the Hostel Rent" name="hostelrent" onChange={handletextdata}/><br />
            <input type="number" placeholder="Enter the Hostel Latitude" name="hostellatitude" onChange={handletextdata}/><br />
            <input type="number" placeholder="Enter the Hostel Longitude" name="hostellongitude" onChange={handletextdata}/><br />
            <input  type="text" placeholder="Enter the Hostel Type (Men or Women)" name="hosteltype" onChange={handletextdata}/><br />
            {loading && <h4>Loading</h4>} <br />
            <button onClick={Senddatatobackend}>Upload data</button>
        </div>
    )
}
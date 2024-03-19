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
    const [services,setServices]=useState([""])
    const handletextdata=(event:React.ChangeEvent<HTMLInputElement>)=>{
    Setdata({...data,[event.target.name]:event.target.value})
    }

    const handleimage=(event:any)=>{
      Setdata({...data,[event.target.name]:event.target.files[0]})  
    }
    
    const handleservice=(service:string)=>{
    services.includes(service) ? setServices(services.filter((item)=>item!==service)):setServices([...services,service])
    }

    const Senddatatobackend=()=>{
        Setloading(true)
        const ratingvalue=JSON.stringify((services.length/12)*5)
        const servicesString = JSON.stringify(services);
        const datapasstobackend=new FormData()
        datapasstobackend.append("hostelname",data.hostelname!)
        datapasstobackend.append("image",data.image)
        datapasstobackend.append("hostellocation",data.hostellocation!)
        datapasstobackend.append("hosteltown",data.hosteltown!)
        datapasstobackend.append("hostelrent",data.hostelrent!)
        datapasstobackend.append("hostellatitude",data.hostellatitude!)
        datapasstobackend.append("hostellongitude",data.hostellongitude!)
        datapasstobackend.append("hosteltype",data.hosteltype!)
        datapasstobackend.append("hostelservices",servicesString)
        datapasstobackend.append("hostelinitialrating",ratingvalue)

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
            <input type="checkbox"  onChange={()=>handleservice("Wifi")}/><span>Wifi</span>
            <input type="checkbox"  onChange={()=>handleservice("Ac")}/><span>Ac</span>
            <input type="checkbox"  onChange={()=>handleservice("Wash")}/><span>Washing</span>
            <input type="checkbox"  onChange={()=>handleservice("Iron")}/><span>Iron</span>
            <input type="checkbox"  onChange={()=>handleservice("Refrigerator")}/><span>Refrigerator</span>
            <input type="checkbox"  onChange={()=>handleservice("Tv")}/><span>Tv</span>
            <input type="checkbox"  onChange={()=>handleservice("Security")}/><span>Security</span>
            <input type="checkbox"  onChange={()=>handleservice("Cupboard")}/><span>Cupboard</span>
            <input type="checkbox"  onChange={()=>handleservice("Parking-2-wheeler")}/><span>Parking-2-Wheeler</span>
            <input type="checkbox"  onChange={()=>handleservice("Cooking")}/><span>Cooking</span>
            <input type="checkbox"  onChange={()=>handleservice("Parking-4-wheeler")}/><span>Parking-4-Wheeler</span>
            <input type="checkbox"  onChange={()=>handleservice("Cycle")}/><span>Cycle</span>
            {loading && <h4>Loading</h4>} <br />
            <button onClick={Senddatatobackend}>Upload data</button>
        </div>
    )
}
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
    hostelimagelinks?:string
    hosteladdress?:string
    hostelcontactno?:string
    hostelemail?:string
    nearbylocations?:string
    gateclosetime?:string
    visitorallowed?:string
    warden?:string
    noticeperiod?:string
    restrictions?:string
    prohibitions?:string
    securitydeposite?:string
    Ironing?:string
    Food?:string
    Washing?:string
    customservices?:string
    }
    const [data,Setdata]=useState<Datatype>({})
    const [loading,Setloading]=useState(false)
    const [customization,setCustomization]=useState<string>("")
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

        datapasstobackend.append("hostelimagelinks",data.hostelimagelinks)
        datapasstobackend.append("hosteladdress",data.hosteladdress)
        datapasstobackend.append("hostelcontactno",data.hostelcontactno)
        datapasstobackend.append("hostelemail",data.hostelemail)
        datapasstobackend.append("nearbylocations",data.nearbylocations)

        datapasstobackend.append("gateclosetime",data.gateclosetime)
        datapasstobackend.append("visitorallowed",data.visitorallowed)
        datapasstobackend.append("warden",data.warden)
        datapasstobackend.append("noticeperiod",data.noticeperiod)
        datapasstobackend.append("restrictions",data.restrictions)
        datapasstobackend.append("prohibitions",data.prohibitions)
        datapasstobackend.append("securitydeposite",data.securitydeposite)

        if(customization)
        {
            datapasstobackend.append("pricecustomization",customization)
            datapasstobackend.append("customservices",data.customservices)
            datapasstobackend.append("Ironing",data.Ironing)
            datapasstobackend.append("Food",data.Food)
            datapasstobackend.append("Washing",data.Washing)
        }

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
            <input type="checkbox"  onChange={()=>handleservice("Cycle")}/><span>Cycle</span><br />


            <input type="text" placeholder="Enter the 4 image link Seperated By Coma" name="hostelimagelinks" onChange={handletextdata}/><br />
            <input type="text" placeholder="Enter Hostel address with pin" name="hosteladdress" onChange={handletextdata} /><br />
            <input type="text" placeholder="Hostel Owner Contact No" name="hostelcontactno" onChange={handletextdata} /><br />
            <input type="text" placeholder="Hostel owner Email" name="hostelemail" onChange={handletextdata} /><br />
            <input type="text" placeholder="Enter the Neraby Locations Seperated by Comma" name="nearbylocations" onChange={handletextdata} /><br />

            <input type="text" placeholder="Gate Close Time" name="gateclosetime" onChange={handletextdata}  /><br />
            <input type="text" placeholder="Visitorsallowed" name="visitorallowed" onChange={handletextdata}  /><br />
            <input type="text" placeholder="Full time warden" name="warden" onChange={handletextdata} /><br />
            <input type="text" placeholder="Notice Period days count" name="noticeperiod" onChange={handletextdata}/><br />
            <input type="text" placeholder="Restrictions" name="restrictions" onChange={handletextdata}  /><br />
            <input type="text" placeholder="Prohibitions (Alcahol drugs)" name="prohibitions" onChange={handletextdata} /><br />
            <input type="text" placeholder="Security Depoiste Amount" name="securitydeposite" onChange={handletextdata} /><br />
            
            <p>Price Customisation</p>
            <input type="radio" name="selection" onChange={()=>setCustomization("true")} /><label>Yes</label>
            <input type="radio" name="selection" onChange={()=>setCustomization("")} /><label>No</label>
            {customization && 
            <div>
                <input type="text" placeholder="Enter Services like Washing,Ironing,Food" name="customservices" onChange={handletextdata} /><br />
                <input type="text" placeholder="Price without Ironing" name="Ironing" onChange={handletextdata} /><br />
                <input type="text" placeholder="Price without Food" name="Food" onChange={handletextdata} /><br />
                <input type="text" placeholder="Price Without Washing" name="Washing" onChange={handletextdata} /><br />
             </div>}
            {loading && <h4>Loading</h4>} <br />
            <button onClick={Senddatatobackend}>Upload data</button>
        </div>
    )
}
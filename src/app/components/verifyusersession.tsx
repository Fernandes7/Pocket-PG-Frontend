"use client"

export default function Verifyusersession(){
    const verfifyuser=()=>{
        localStorage.setItem("user","Fernandes")
    }
    return(
        <>
        <button onClick={verfifyuser}>Verify</button>
        </>
    )
}
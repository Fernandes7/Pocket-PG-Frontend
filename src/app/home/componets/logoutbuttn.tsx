"use client"
import { useRouter } from "next/navigation"

export default function Logoutbutton(){
    const router=useRouter()
    const logoutfunction=()=>{
        localStorage.clear()
        router.push("/")
    }
return(
    <>
    <button onClick={logoutfunction}>Logout button</button>
    </>
)
}
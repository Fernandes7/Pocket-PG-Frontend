"use client"
import { useRouter } from "next/navigation"

export default function LogoutButton()
{
    const router=useRouter()
    const logoutaction=()=>{
        localStorage.clear()
        router.push("/")
    }
    return(
        <>
        <button onClick={logoutaction}>Logout</button>
        </>
    )
}
"use client"
import { useEffect } from "react"
import Verifyusersession from "./components/verifyusersession"
import styles from "./page.module.css"
import { useRouter } from "next/navigation"
export default function Startpage(){
  const router=useRouter()
  useEffect(()=>{
    const user=localStorage.getItem("user")
    if(user==="Fernandes")
    {
      router.push("/home")
    }

  },[])
  return(
    <>
    <Verifyusersession />
    <h1 className={styles.head}>Start Page</h1>
    </>
  )
}
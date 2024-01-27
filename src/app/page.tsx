"use client"
import { RegisterRouteButton } from "./componets/registerroutebutton"
import styles from "./page.module.css"
import { useRouter } from "next/navigation"
export default function Startpage(){
  const router=useRouter()
  return(
    <>
    <RegisterRouteButton />
    <h1 className={styles.head}>Start Page</h1>
    </>
  )
}
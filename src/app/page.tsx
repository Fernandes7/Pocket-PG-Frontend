"use client"
import { RegisterRouteButton } from "./componets/registerroutebutton"
import Verifyuserloggined from "./componets/verifyuserloggined"
import styles from "./page.module.css"
import { useRouter } from "next/navigation"
export default function Startpage(){
  const router=useRouter()
  Verifyuserloggined()
  return(
    <>
    <RegisterRouteButton />
    <h1 className={styles.head}>Start Page edited by aastin</h1>
    </>
  )
}
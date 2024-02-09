"use client"
import { RegisterRouteButton } from "./componets/registerroutebutton"
import Verifyuserloggined from "./componets/verifyuserloggined"
import styles from "./page.module.css"
export default function Startpage(){
  Verifyuserloggined()
  return(
    <>
    <RegisterRouteButton />
    <h1 className={styles.head}>Start Page edited by aastin</h1>
    </>
  )
}
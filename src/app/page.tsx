"use client"
import { RegisterRouteButton } from "./componets/registerroutebutton"
import Verifyuserloggined from "./componets/verifyuserloggined"
import styles from "./page.module.css"


export default function Startpage(){
  Verifyuserloggined()
  return(
    <div className={styles.container}>
      <h1 className={styles.heading}>Pocket PG</h1>
      <hr className={styles.customHr}/>
      <RegisterRouteButton /> 
    </div>
  )
}

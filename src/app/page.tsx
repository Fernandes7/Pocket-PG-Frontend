"use client"
import { RegisterRouteButton } from "./componets/registerroutebutton"
import Verifyuserloggined from "./componets/verifyuserloggined"
import styles from "./page.module.css"
<<<<<<< HEAD
import { useRouter } from "next/navigation"

=======
>>>>>>> 219573f0f51bdb18c42a055f88e88fee27c65953
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

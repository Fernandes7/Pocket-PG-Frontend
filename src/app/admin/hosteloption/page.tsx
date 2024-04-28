"use client"

import { useRouter } from "next/navigation"
import styles from "./hosteloption.module.css"

export default function HostelopTion()
{
   const router=useRouter()
    return(
        <div className={styles.hosteloptionwrap}>
          <div className={styles.addhosteladmin} onClick={()=>router.push("/admin/addhostel")}>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/3524/3524384.png" alt="" />
                <h2>Add New Hostel</h2>
            </div>
          </div>
          <div className={styles.adminhosteldiv}>
            <div className={styles.hostelwrap}>
             <img className={styles.hostelwrapimg} src="https://thumbs.dreamstime.com/b/beds-hostel-affordable-housing-36997317.jpg" alt="" />
             <h1>Hostel Name</h1>
             <div className={styles.hostelwrapdiv}>
                <img src="https://cdn-icons-png.flaticon.com/128/855/855003.png" alt="" />
                <p>Hostel Adress pin:680686</p>
             </div>
             <div className={styles.optiondiv}>
              <img src="https://cdn-icons-png.flaticon.com/128/2356/2356780.png" alt="edit" />
              <img src="https://cdn-icons-png.flaticon.com/128/558/558385.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/128/1150/1150592.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/128/484/484662.png" alt="" />
             </div>
            </div>

            
          </div>
        </div>
    )
}
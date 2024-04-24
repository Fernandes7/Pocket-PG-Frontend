import { useRouter } from "next/navigation"
import styles from "../home.module.css"

export default function DisplaymapHostels({hostelname,hostelimage,hosteltype,hostellocation,hosteltown,hostelrent,_id})
{
    const router=useRouter()
    return(
        <div className={styles.hostelcard} key={hostelname} onClick={()=>router.push(`/selectedhostel?hostelid=${_id}`)}>
        <img src={hostelimage} alt="hostelimage" className={styles.hostelimage} />
        <div className={styles.hostelcardcontent}>
           <div className={styles.hostelcardname}>
           <h3>{hostelname}</h3>
           <p>{hosteltype} Hostel</p>
           </div>
           <div>
               <img src="https://cdn-icons-png.flaticon.com/128/11515/11515653.png" alt="location image" />
               <p>{hostellocation},{hosteltown}</p>
           </div>
           <div>
               <img src="https://cdn-icons-png.flaticon.com/128/1828/1828970.png" alt="location image" />
               <p>4.7,(2567 Reviews)</p>
           </div>
           <div className={styles.hostelcardamount}>
               <div>
                   <img src="https://cdn-icons-png.flaticon.com/128/6366/6366707.png" alt="rsimage" />
                   <h3>{hostelrent}</h3>
                   <p>/ month</p>
               </div>
               <img src="https://cdn-icons-png.flaticon.com/128/545/545682.png" alt="" />
           </div>
        </div>
       </div>
    )
}
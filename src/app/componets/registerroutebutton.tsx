import { useRouter } from "next/navigation"
import styles from "../page.module.css"
const RegisterRouteButton=()=>{
    const router=useRouter()
    return (
        <button className={styles.regbtn} onClick={()=>router.push("/register")}>Register/Login Now</button>
    )
}

export {RegisterRouteButton}
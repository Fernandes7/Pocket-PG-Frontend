"use client"
import Verifyuserloggined from "./componets/verifyuserloggined"
import styles from "./page.module.css"
import kochi from "./images/kochi.jpg"
import thrissur from "./images/thrissur.jpg"
import kozhikode from "./images/kozhikode.jpg"
import trivandrum from "./images/trivandrum.webp"
import waynad from "./images/wayanad.jpeg"
import Image from 'next/image'
import { useRouter } from "next/navigation"

export default function Startpage(){
  const router=useRouter()
  Verifyuserloggined()
  const movetohomepage=(linkpath:string)=>{
  router.push(linkpath)
  }
  return(
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.imagediv}>
        <h1 className={styles.mainhead}>Welcome to POCKET PG</h1>
        <h5 className={styles.mainsubhead}>Manage your hostel effortlessly</h5>
        <button className={styles.explorebutton} onClick={()=>movetohomepage("/home?initial=true")}>Explore Now</button>
        <div className={styles.linksdiv}>
          <ul>
            <li  onClick={()=>movetohomepage("/")}>Home</li>
            <li  onClick={()=>movetohomepage("/about")}>About</li>
            <li  onClick={()=>movetohomepage("/pgservices")}>Services</li>
            <li  onClick={()=>movetohomepage("/contact")}>Contact</li>
            <li  onClick={()=>movetohomepage("/termsandcondition")}>Term's & Condition</li>
          </ul>
        </div>
      </div>
      </div>
      <h2 className={styles.totalcities}>Popular Cities</h2>
      <div className={styles.citiescontainer1}>
        <div className={styles.card}>
        <Image src={kochi} alt="kochi" className={styles.ftimage1}  />
        <p className={styles.locality}>Kochi</p>
        </div>
        <div className={styles.card}>
        <Image src={thrissur} alt="thrissur" className={styles.ftimage1}  />
        <p className={styles.locality}>Thrissur</p>
        </div>
        <div className={styles.card}>
        <Image src={kozhikode} alt="kozhikode" className={styles.ftimage1}  />
        <p className={styles.locality}>Kozhikode</p>
        </div>
      </div>
      <div className={styles.citiescontainer2}>
      <div className={styles.card}>
        <Image src={trivandrum} alt="trivandrum" className={styles.ftimage1}  />
        <p className={styles.locality}>Thiruvananthapuram</p>
        </div>
        <div className={styles.card}>
        <Image src={waynad} alt="waynad" className={styles.ftimage2}  />
        <p className={styles.locality}>Wayanad</p>
        </div>
      </div>
    </div>
  )
}

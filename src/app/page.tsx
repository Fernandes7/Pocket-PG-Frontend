"use client"
import { RegisterRouteButton } from "./componets/registerroutebutton"
import Verifyuserloggined from "./componets/verifyuserloggined"
import styles from "./page.module.css"
import hostel from "./images/mainpagehostel.jpg"
import kochi from "./images/kochi.jpg"
import thrissur from "./images/thrissur.jpg"
import kozhikode from "./images/kozhikode.jpg"
import trivandrum from "./images/trivandrum.webp"
import waynad from "./images/waynad.jpg"
import Image from 'next/image'

export default function Startpage(){
  Verifyuserloggined()
  return(
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.pocket}>POCKET PG</h2>
        <div className={styles.subheader}>
          <h2 className={styles.about}>About Us</h2>
          <h2 className={styles.contact}>Contact</h2>
        </div>
      </div>
      <hr className={styles.customHr}/>
      <div className={styles.main}>
        <Image  src={hostel} alt="a picture of a hostel" className={styles.bgimage} fill={true}/>
        <h1 className={styles.mainhead}>Welcome to POCKET PG</h1>
        <h5 className={styles.mainsubhead}>Manage your hostel effortlessly</h5>
        <RegisterRouteButton /> 
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
        <p className={styles.locality}>Thiruvananthapura</p>
        </div>
        <div className={styles.card}>
        <Image src={waynad} alt="waynad" className={styles.ftimage2}  />
        <p className={styles.locality}>Wayanad</p>
        </div>
      </div>
    </div>
  )
}


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
        <button className={styles.explorebutton} onClick={()=>movetohomepage("/home?location=erna")}>Explore Now</button>
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
      <div className={styles.aboutcontainer} id="aboutuslink">
        <h2 className={styles.aboutus}>About Us</h2>
        <h3 className={styles.aboutusdata}>Our Story</h3>
        <p>PocketPG was founded in 2019 by a group of friends who were passionate about travel and the power of community. Our founders recognized the need for affordable, high-quality housing in urban areas, and set out to create a new kind of living experience. They began by transforming a single family home into a shared living space, and quickly realized the potential for a new category of real estate. Today, PocketPG is redefining the rental market with a network of beautifully designed, community-focused properties.</p>
        <h3 className={styles.aboutusdata}>Our Mission</h3>
        <p>To build a world where everyone has access to safe, affordable, and inspiring living spaces. We believe that great design, smart technology, and a strong sense of community can elevate the rental experience and improve the quality of life for our members. Our mission is to create a new standard for urban living, one that is sustainable. inclusive, and built on the principles of trust, transparency, and collaboration.</p>
      </div>
      <div className={styles.footer} id="contactlink">
        <div className={styles.foot1}>
          <div className={styles.footerleft}>
            <p style={{fontWeight: 600}}>Pocket PG</p>
            <p>Pocket PG is India's fastest growing affordable “Hostels and PGs <br />listing platform” that makes it easier for you to find the best <br />suited place for your budget and needs.</p>
            <div className={styles.places}>
              <p className={styles.locations}>Thrissur</p>
              <p className={styles.locations}>Thiruvananthapuram</p> 
              <p className={styles.locations}>Kochi</p>
              <p className={styles.locations}>Wayanad</p>
              <p className={styles.locations}>Kozhikode</p>
            </div>     
          </div>
          <div className={styles.footerright}>
            <p style={{fontWeight: 600}}>Contact Us</p>
            <p>Phone: +91 70250 59876</p>
            <p>Mail: fernandes007@gmail.com</p>
          </div>
        </div>
        <p className={styles.footerbottom}>All rights reserved © 2024 - Pocket PG</p>
      </div>
    </div>
  )
}

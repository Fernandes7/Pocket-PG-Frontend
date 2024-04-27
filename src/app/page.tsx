"use client"
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
  const movetohomepage=(linkpath:string)=>{
  router.push(linkpath)
  }
  return(
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.imagediv}>
        <div className={styles.mainsubhead}>
        <div className={styles.rounddivwrap}>
            <div className={styles.rounddiv}></div>
            <div className={styles.rounddiv}></div>
            <div className={styles.rounddiv}></div>
            <div className={styles.rounddiv}></div>
            <div className={styles.rounddiv}></div>
          </div>
          <p>Discover the new valleys of Hostel rooms</p>
          <h1>Welcome to pocket PG</h1>
          <div className={styles.eb} onClick={()=>movetohomepage("/home?initial=true")}>
            <img src="https://cdn-icons-png.flaticon.com/128/2822/2822311.png" alt="hey" />
            <p>Explore now </p>
            <img src="https://cdn-icons-png.flaticon.com/128/545/545682.png" alt="hey" />
          </div>
        </div>
        <div className={styles.linksdiv}>
          <ul>
            <li  onClick={()=>movetohomepage("/")}>Home</li>
            <li  onClick={()=>movetohomepage("/about")}>About</li>
            <li  onClick={()=>movetohomepage("/pgservices")}>Services</li>
            <li  onClick={()=>movetohomepage("/contact")}>Contact</li>
            <li  onClick={()=>movetohomepage("/termsandcondition")}>Terms & Condition</li>
          </ul>
        </div>
      </div>
      </div>
      <div className={styles.downpagewrap}>
        <div className={styles.downpagewrapdiv}>
          <p>Explore Hostels</p>
          <img src="https://cdn-icons-png.flaticon.com/128/2722/2722987.png" alt="" />
        </div>
        <div className={styles.downpagewrapdiv}>
          <p>Filter Hostels</p>
          <img src="https://cdn-icons-png.flaticon.com/128/2722/2722987.png" alt="" />
        </div>
        <div className={styles.downpagewrapdiv}>
          <p>Review Analysis</p>
          <img src="https://cdn-icons-png.flaticon.com/128/2722/2722987.png" alt="" />
        </div>
        <div className={`${styles.bookcolor}`}>
          <p>Book Hostel</p>
          <img src="https://cdn-icons-png.flaticon.com/128/2722/2722987.png" alt="" />
        </div>
      </div>

      <div className={styles.firstwarp}>
       <div className={styles.firstleft}>
        <h2>Trust and Quality are our Moto</h2>
        <p>Welcome to our hostel, where trust meets quality! With our innovative filtering system, we ensure only the best accommodations for our guests. Leveraging sentiment analysis on reviews, we guarantee a delightful stay tailored to your preferences. Our hostel boasts top-notch user interaction, fostering a vibrant community atmosphere. </p>
        <p>Whether you seek a tranquil retreat or lively social hub, we cater to all needs. Immerse yourself in comfort, cleanliness, and convenience, backed by the trust of countless satisfied guests. Experience hospitality redefined with us, where every stay is a seamless blend of quality service and unforgettable memories. Book now for an unparalleled hostel experience!</p>
        <button>Book Now</button>
       </div>
       <div className={styles.firstright}>
        <div className={styles.imagetop}>
          <img src="https://b65d5c50.flyingcdn.com/wp-content/uploads/2023/08/luxury-hotel-lobby-furniture-for-sale.jpg" alt="" />
           <img src="https://artfulliving.com/wp-content/uploads/2024/01/LUXURY-HOSTELS_FEAT-1.png" alt="" />
        </div>
        <div className={styles.imagedown}>
          <img src="https://static.vecteezy.com/system/resources/previews/031/412/309/large_2x/ai-generated-ai-generative-luxury-hotel-villa-house-patio-mansion-style-living-relaxing-room-with-big-window-and-view-on-sea-ocean-landscape-background-graphic-art-photo.jpg" alt="" />
        </div>
       </div>
      </div>
    </div>
  )
}

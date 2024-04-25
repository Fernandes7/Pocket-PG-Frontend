"use client"
import { usePathname } from "next/navigation"
import styles from "../page.module.css"
export default function Footer(){
  const pathname=usePathname()
    return(
        <div>
          {pathname!=="/register"?<div className={styles.footer} id="contactlink">
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
      </div>:<div></div>}
        </div>
    )
}
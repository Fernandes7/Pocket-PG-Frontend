import styles from "./contact.module.css"
import Image from 'next/image'
import email from "./images/circle.png"
import phone from "./images/phone (2).png"
import location from "./images/location (2).png"
export default function Contact()
{
    return(
        <>
        <div className={styles.upper}>
            <div className={styles.upperfont}>Contact Us</div>
        </div>
        <div className={styles.bottom}>
            <div className={styles.box1}>
                <div className={styles.image}>
                    <Image src={email} width={45} height={45} alt="Picture of the author" />
                </div>
                <div className={styles.mail}><h3>Mail Id</h3></div>
                <div className={styles.web}><p>contact@pocketpg.in</p></div>
            </div>
            <div className={styles.box2}>
                <div className={styles.image}>
                    <Image src={location} width={45} height={45} alt="Picture of the author" />
                </div>
                <div className={styles.mail}><h3>Location</h3></div>
                <div className={styles.web}><p>POCKET PG</p><p>Christ College of Engineering</p><p>Irinjalakuda,Thrissur</p></div>
            </div>
            <div className={styles.box3}>
                <div className={styles.image}>
                    <Image src={phone} width={45} height={45} alt="Picture of the author" />
                </div>
                <div className={styles.mail}><h3>Mobile</h3></div>
                <div className={styles.web}><p>+91 7510736471</p></div>
            </div>
        </div>
        </>
    )
}
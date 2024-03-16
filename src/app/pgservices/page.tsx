import styles from "../pgservices/pgservices.module.css"
import book from "../images/booking.png"
import rating from "../images/rating.png"
import filter from "../images/filter.png"
import add from "../images/add.png"
import search from "../images/search.png"
import choose from "../images/choose.png"
import Image from "next/image"
export default function Pgservices()
{
    return(
        <div className={styles.main}>
        <h3 className={styles.head1}>Why are we the best?</h3>
        <h1 className={styles.head2}>Our Services</h1>
        <div className={styles.container}>
            <div className={styles.servicecard}>
                <Image className={styles.pic} src={book} alt="hello"/>
                <p className={styles.service}>Hostel Booking and Exploring the details</p>
            </div>
            <div className={styles.servicecard}>
                <Image className={styles.pic} src={search} alt="image"/>
                <p className={styles.service}>Location based Hostel Searching</p>
            </div>
            <div className={styles.servicecard}>
                <Image className={styles.pic} src={add} alt="image"/>
                <p className={styles.service}>Adding New Hostels</p>
            </div>
            <div className={styles.servicecard} >
                <Image className={styles.pic} src={rating} alt="image"/>
                <p className={styles.service}>Hostel Review based Comparison</p>
            </div>
            <div className={styles.servicecard}>
                <Image className={styles.pic} src={filter} alt="image"/>
                <p className={styles.service}>Filtering and Sorting the Hostels</p>
            </div>
            <div className={styles.servicecard}>
                <Image className={styles.pic} src={choose} alt="image"/>
                <p className={styles.service}>Choose services what Hostel provides.</p>
            </div>
        </div>
        
        </div>
    )
}
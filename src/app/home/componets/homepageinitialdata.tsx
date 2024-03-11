import styles from "../home.module.css"
export default function HomepageInitialdata()
{
    return(
        <div className={styles.homepageinitialdatawrap}>
            <h4>Locations we Serve</h4>
            <div>
                <div className={styles.locationcard}>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPPAI8II7mdmsma9Qu3wRS0yUo4k3Zsnbo-A&usqp=CAU" alt="locationimge" />
                   <div className={styles.locationtext}>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/9800/9800512.png" alt="locationicon" />
                            <div>
                                <h3>Ernakulam</h3>
                                <p>73 Hostels</p>
                            </div>
                        </div>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/3550/3550091.png" alt="arrowicon" />
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
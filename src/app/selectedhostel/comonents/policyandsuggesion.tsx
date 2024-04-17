import styles from "../selected.module.css"

export default function PolicyandSimilarHostels()
{
    return(
        <div className={styles.policywrap}>
        <div className={styles.policywrapindiv}>
            <h3>Policies/Regulation</h3>
            <h5>This the need to be Followed strictly</h5>
            <div className={styles.policydiv}>
                <p>Gate Close Time</p>
                <p>6.00 pm</p>
            </div>
            <div className={styles.policydivwhite}>
                <p>Visitors allowed</p>
                <p>Yes</p>
            </div>
            <div className={styles.policydiv}>
                <p>Full Time wardern</p>
                <p>6.00 pm</p>
            </div>
            <div className={styles.policydivwhite}>
                <p>Notice Period</p>
                <p>Yes</p>
            </div>
            <div className={styles.policydiv}>
                <p>Restrictions</p>
                <p>6.00 pm</p>
            </div>
            <div className={styles.policydivwhite}>
                <p>Prohibited</p>
                <p>Alcahol/Ciggerate</p>
            </div>
            <div className={styles.policydiv}>
                <p>Security Depoite</p>
                <p>500/-</p>
            </div>
        </div>
        <div  className={styles.similardivs}>
            <h3 className={styles.similarhostelh3}>Similar Hostels realated to your selection</h3>
            <p className={styles.pofsimilar}>Go Through the this suggetions also</p>
            <div className={styles.similardiv}>
                <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg" alt="hoeelimage" />
                <div>
                    <h3>Hostel name of Villas</h3>
                    <p>Address Kumabalth Vithayathi 680686</p>
                </div>
            </div>
            <div className={styles.similardiv}>
                <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg" alt="hoeelimage" />
                <div>
                    <h3>Hostel name of Villas</h3>
                    <p>Address Kumabalth Vithayathi 680686</p>
                </div>
            </div>
            <div className={styles.similardiv}>
                <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg" alt="hoeelimage" />
                <div>
                    <h3>Hostel name of Villas</h3>
                    <p>Address Kumabalth Vithayathi 680686</p>
                </div>
            </div>
        </div>
    </div> 
    )
}
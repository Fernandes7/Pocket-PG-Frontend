import { useRouter } from "next/navigation"
import styles from "../selected.module.css"

export default function PolicyandSimilarHostels({gateclosetime,visitorallowed,warden,noticeperiod,restrictions,prohibitions,securitydeposite,similarhostel})
{
    const router=useRouter()
    return(
        <div className={styles.policywrap}>
        <div className={styles.policywrapindiv}>
            <h3>Policies/Regulation</h3>
            <h5>This the need to be Followed strictly</h5>
            <div className={styles.policydiv}>
                <p>Gate Close Time</p>
                <p>{gateclosetime}</p>
            </div>
            <div className={styles.policydivwhite}>
                <p>Visitors allowed</p>
                <p>{visitorallowed}</p>
            </div>
            <div className={styles.policydiv}>
                <p>Full Time wardern</p>
                <p>{warden}</p>
            </div>
            <div className={styles.policydivwhite}>
                <p>Notice Period</p>
                <p>{noticeperiod}</p>
            </div>
            <div className={styles.policydiv}>
                <p>Restrictions</p>
                <p>{restrictions}</p>
            </div>
            <div className={styles.policydivwhite}>
                <p>Prohibited</p>
                <p>{prohibitions}</p>
            </div>
            <div className={styles.policydiv}>
                <p>Security Depoite</p>
                <p>{securitydeposite}</p>
            </div>
        </div>
        <div  className={styles.similardivs}>
            <h3 className={styles.similarhostelh3}>Similar Hostels realated to your selection</h3>
            <p className={styles.pofsimilar}>Go Through the this suggetions also</p>
            {similarhostel.map(({_id,hostelimage,hostelname,hosteladdress})=>{
                return(
                    <div className={styles.similardiv} onClick={()=>router.push(`/selectedhostel?hostelid=${_id}`)}>
                <img src={hostelimage} alt="hoeelimage" />
                <div>
                    <h3>{hostelname}</h3>
                    <p>{hosteladdress}</p>
                </div>
            </div>
                )
            })}
        </div>
    </div> 
    )
}
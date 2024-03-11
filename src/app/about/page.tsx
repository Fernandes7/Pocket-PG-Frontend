import styles from "./about.module.css"
import Image from "next/image"
import aastin from "../images/aastinpic.jpg"
import minna from "../images/minnadp.jpg"
import ferno from "../images/fernodp.jpg"
import roshan from "../images/roshandp.jpg"
export default function About()
{
    return(
        <div>
            <div className={styles.aboutbody}>
                <h1 className={styles.head}>About Us</h1>
                <div className={styles.aboutcontent}>
                    <p>Many students studying far from home struggle to find lodging. They often lack knowledge about facilities like hostels and homestays and don't know whom to
contact for details. There's also the risk of being cheated or choosing a place that doesn't meet their expectations. Finding transportation to and from the
hostel can be a struggle, especially if they are not aware <br />of the public transportation system or don't have access to a vehicle. <br /><br /> Limited budgets may
force students to choose hostels located further <br />from their institutions or in less convenient areas, leading to longer commutes and more difficulties. The process
of finding a hostel can be isolating, as students may not have a support network or friends in the area yet, which can exacerbate the feelings of being lost or
disconnected. <br /><br />To solve this problem, an application can help users find nearby hostels and homestays. Users can filter results by location, price. They can even schedule a
visit to the location and view services offered. <br /> <br /> The app also benefits business owners, who can directly interact with customers. They can also view the nearby
popular locations and location distance from the hostel. This website also provides a feature for customizing the available services to make the hostels
affordable. The rating and feedback about the selected place would help the customers to validate the quality of service provide by them.
                    </p>
                </div>
                <h1 className={styles.founders}>Our Team</h1>
                <div className={styles.founderdiv}>
                    <div className={styles.card}>
                        <Image src={aastin} alt="aastinpic" className={styles.founderpic}  />
                        <div className={styles.founderdetails}>
                            <p className={styles.name}>Aastin Wilson</p>
                            <p className={styles.designation}>Frontend Developer</p>
                        </div>    
                    </div>
                    <div className={styles.card}>
                        <Image src={roshan} alt="aastinpic" className={styles.founderpic}  />
                        <div className={styles.founderdetails}>
                            <p className={styles.name}>Roshan Paul</p>
                            <p className={styles.designation}>Frontend Developer</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image src={minna} alt="aastinpic" className={styles.founderpic}  />
                        <div className={styles.founderdetails}>
                            <p className={styles.name}>Minna Elizabeth Martin</p>
                            <p className={styles.designation}>Frontend Developer</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image src={ferno} alt="aastinpic" className={styles.founderpic}  />
                        <div className={styles.founderdetails}>
                            <p className={styles.name}>Fernandes K J</p>
                            <p className={styles.designation}>Backend Developer</p>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    )
}
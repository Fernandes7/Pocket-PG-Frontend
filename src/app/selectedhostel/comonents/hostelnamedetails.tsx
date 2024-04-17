import styles from "../selected.module.css"

export default function HostelnameDetails({handlecustomize})
{
    return(
        <div className={styles.hostelnamediv}>
                    <div className={styles.nameselected}>
                        <h2>This the Luxury Hostel</h2>
                        <div className={styles.addresswarp}>
                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/128/819/819865.png" alt="" />
                                <p>Kumbalth Vithyathil,No:210,Chakkrappadm PO,680686</p>
                            </div>
                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/128/3415/3415136.png" alt="" />
                                <p>Contact No:7025059876</p>
                            </div>
                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/128/2165/2165061.png" alt="" />
                                <p>Email:ferno@gmail.com</p>
                            </div>
                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/128/2019/2019724.png" alt="" />
                                <p>Men's Hostel</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.priceofselected}>
                        <div>
                        <h2>Rs 5999</h2>
                        <p>/Month</p>
                        </div>
                        <div className={styles.selectedbutton}>
                        <div onClick={handlecustomize}>
                            <h3>Customize Price</h3>
                        </div>
                        <button>Book Now</button>
                        </div>
                        
                    </div>
                </div>
    )
}
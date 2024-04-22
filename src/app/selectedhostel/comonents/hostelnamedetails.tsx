import styles from "../selected.module.css"

export default function HostelnameDetails({handle,hosteladdress,handlecustomize,hostelname,hostelemail,hostelcontactno,hosteltype,hostelrent,pricecustomization,enabletext})
{
    return(
        <div className={styles.hostelnamediv}>
                    <div className={styles.nameselected}>
                        <h2>{hostelname}</h2>
                        <div className={styles.addresswarp}>
                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/128/819/819865.png" alt="" />
                                <p>{hosteladdress}</p>
                            </div>
                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/128/3415/3415136.png" alt="" />
                                <p>Contact No:{hostelcontactno}</p>
                            </div>
                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/128/2165/2165061.png" alt="" />
                                <p>{hostelemail}</p>
                            </div>
                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/128/2019/2019724.png" alt="" />
                                <p>{hosteltype} Hostel</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.priceofselected}>
                        <div>
                        <h2>Rs {hostelrent}</h2>
                        <p>/Month</p>
                        {enabletext && <p style={{color:"red",fontFamily:"Lato"}}>The Hostel Rent is Customized</p>}
                        </div>
                        <div className={styles.selectedbutton}>
                        {pricecustomization &&<div onClick={handlecustomize}>
                            <h3>Customize Price</h3>
                        </div>}
                        <button onClick={handle}>Book Now</button>
                        </div>
                        
                    </div>
                </div>
    )
}
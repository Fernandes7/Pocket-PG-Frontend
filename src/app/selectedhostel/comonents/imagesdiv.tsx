import styles from "../selected.module.css"

export default function ImagesDivofSelectedHostel()
{
    return(
        <div className={styles.imageselectwrap}>
                    <img src="https://plus.unsplash.com/premium_photo-1661876306620-f2f2989f8f8b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bHV4dXJ5JTIwaG90ZWwlMjByb29tfGVufDB8fDB8fHww" className={styles.leftselectedimg} alt="roomimage"></img>
                    <div className={styles.rightselectedimg}>
                      <img src="https://www.journeyera.com/wp-content/uploads/2020/02/luxury-hotels-hong-kong-5-star-226115090-1024x682.jpg" className={styles.inimage}></img>
                      <img src="https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_55_660x440.jpg" className={styles.inimage}></img>
                      <img src="https://www.journeyera.com/wp-content/uploads/2020/02/luxury-hotels-hong-kong-5-star-226115090-1024x682.jpg" className={styles.inimage}></img>
                      <img src="https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_55_660x440.jpg" className={styles.inimage}></img>
                    </div>
                </div>
    )
}
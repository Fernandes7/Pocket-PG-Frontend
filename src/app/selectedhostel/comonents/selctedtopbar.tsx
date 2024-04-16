import styles from "../selected.module.css"

export default function SelectedPageTopbar(){
    return(
        <div className={styles.topbar}>
                    <div className={styles.backofselected}>
                        <img src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png" alt="arrowimage" />
                        <p>Search the Hostel for Location</p>
                    </div>
                    <div className={styles.icondivselcted}>
                        <img src="https://cdn-icons-png.flaticon.com/128/707/707680.png" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/128/1358/1358023.png" alt="" />
                    </div>
                </div>
    )
}
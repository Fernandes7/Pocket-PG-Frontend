import styles from "../selected.module.css"

export default function ImagesDivofSelectedHostel({hostelimage,images})
{
  const imagesarry=images.split(",")
    return(
        <div className={styles.imageselectwrap}>
                    <img src={hostelimage} className={styles.leftselectedimg} alt="roomimage"></img>
                    <div className={styles.rightselectedimg}>
                      <img src={imagesarry[2]} className={styles.inimage}></img>
                      <img src={imagesarry[0]} className={styles.inimage}></img>
                      <img src={imagesarry[1]} className={styles.inimage}></img>
                      <img src={imagesarry[3]} className={styles.inimage}></img>
                    </div>
                </div>
    )
}
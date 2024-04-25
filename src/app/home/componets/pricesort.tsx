import styles from "../home.module.css"

export default function PrizeSort({openpricesort,sorthosteldatafunction})
{
    return(
        <div className={`${styles.sortrent} ${openpricesort?styles.open:styles.close}`}>
        <h2>Select the type of sort</h2>
        <button onClick={()=>sorthosteldatafunction(false,"hostelrent")}>Low to High</button>
        <button onClick={()=>sorthosteldatafunction(true,"hostelrent")}>High to low</button>
    </div>
    )
}
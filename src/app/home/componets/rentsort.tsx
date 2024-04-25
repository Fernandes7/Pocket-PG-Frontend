import styles from "../home.module.css"

export default function RentSort({openrateingsort,sorthosteldatafunction})
{
    return(
            <div className={`${styles.sortrent} ${openrateingsort?styles.open:styles.close}`}>
                <h2>Select the type of Rating Sort</h2>
                <button onClick={()=>sorthosteldatafunction(false,"hostelinitialrating")}>Lowest rating first</button>
                <button onClick={()=>sorthosteldatafunction(true,"hostelinitialrating")}>Highest rating first</button>
            </div>
    )
}
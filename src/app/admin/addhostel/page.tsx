import AddHostelcomponets from "./components/addhostelsdatacomponent";
import styles from "./addhostel.module.css"

export default function AddHosteldata()
{
    return(
        <div className={styles.inputfirstwrap}>
            <div className={styles.inputmainwrap}>
            <h2>Add Hostel Details</h2>
            <AddHostelcomponets />
            </div>
        </div>
    )
}
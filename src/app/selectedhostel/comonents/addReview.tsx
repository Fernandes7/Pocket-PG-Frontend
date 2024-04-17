import styles from "../selected.module.css"

export default function AddReview({addreview})
{
    return(
        <div className={styles.addreviewwrap}>
            <img src="https://cdn-icons-png.flaticon.com/128/5254/5254940.png" alt="" className={styles.closeofviewreview} onClick={addreview} />
         <h2>Add the Review to Hostel</h2>
         <p>Yours Reviews are so valuable! Try to give genuine review</p>
         <input type="text" placeholder="Enter Your Review Here" />
         <button>Upload Review</button>
        </div>
    )
}
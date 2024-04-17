import styles from "../selected.module.css"

export default function ViewReviews({handlereviews})
{
    return(
        <div className={styles.viewwrap}>
          <img src="https://cdn-icons-png.flaticon.com/128/5254/5254940.png" alt="" className={styles.closeofviewreview} onClick={handlereviews} />
          <h2>Review Details Added</h2>
          <h4>This are the reviews added by the differnt registerd users</h4>
          <div className={styles.wrapofreview}>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/1791/1791320.png" alt="" />
                <p>This is the one of the best hostel i have ever meet.This infrastructure is very nice and comfortable for living</p>
            </div>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/1791/1791320.png" alt="" />
                <p>This is the one of the best hostel i have ever meet.This infrastructure is very nice and comfortable for living</p>
            </div>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/1791/1791320.png" alt="" />
                <p>This is the one of the best hostel i have ever meet.This infrastructure is very nice and comfortable for living</p>
            </div>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/1791/1791320.png" alt="" />
                <p>This is the one of the best hostel i have ever meet.This infrastructure is very nice and comfortable for living</p>
            </div>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/1791/1791320.png" alt="" />
                <p>This is the one of the best hostel i have ever meet.This infrastructure is very nice and comfortable for living</p>
            </div>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/1791/1791320.png" alt="" />
                <p>This is the one of the best hostel i have ever meet.This infrastructure is very nice and comfortable for living</p>
            </div>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/1791/1791320.png" alt="" />
                <p>This is the one of the best hostel i have ever meet.This infrastructure is very nice and comfortable for living</p>
            </div>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/1791/1791320.png" alt="" />
                <p>This is the one of the best hostel i have ever meet.This infrastructure is very nice and comfortable for living</p>
            </div>
          </div>
        </div>
    )
}
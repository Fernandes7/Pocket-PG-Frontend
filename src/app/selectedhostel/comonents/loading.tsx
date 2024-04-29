import styles from "../selected.module.css"

export default function LoadingScreen()
{
    return(
        <div className={styles.loadwrap}>
            <img src="https://res.cloudinary.com/dnvq4niny/image/upload/v1714398714/360_F_511961836_SJnNSkj3kzUUh5f5niudZ5urYp6VJdBE-removebg-preview_wwmgaa.png" alt="Loading..." />
        </div>
    )
}
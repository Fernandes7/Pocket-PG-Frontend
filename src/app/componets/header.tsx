import style from "../page.module.css"
export default function Header()
{
    return(
        <div className={style.headdiv}>
            <p>PG Logo</p>
            <div className={style.linkdiv}>
                <button>Login</button>
                <button>Add Hostel</button>
            </div>
        </div>
    )
}
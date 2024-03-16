import style from "../page.module.css"
import Logo from "../images/logo.png"
import Image from "next/image"
export default function Header()
{
    return(
        <div className={style.headdiv}>
            <Image src={Logo} alt="Logo" className={style.logoimage}></Image>
            <div className={style.linkdiv}>
                <button>Login</button>
                <button>Add Hostel</button>
            </div>
        </div>
    )
}
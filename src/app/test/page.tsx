"use client"
import { useState } from "react"
import styles from "./test.module.css"

export default function Test()
{
    const [open,setOpen]=useState(false)
    const handle=()=>{
        setOpen(!open)
        console.log(open)
    }
    return(
        <div>
            <button onClick={handle} className={styles.textbutton}>Click Here</button>
            <div className={`${styles.textdiv} ${ open ? styles.open:styles.close}`}>
                Hey manu
            </div>
            <p>Hello</p>
            <div className={styles.parent}>
               
            <div className={styles.child} onClick={()=>console.log("Child")}>
                Child
            </div>
            <div className={styles.bb} onClick={()=>console.log("parent")}></div>
            </div>
        </div>
    )
}
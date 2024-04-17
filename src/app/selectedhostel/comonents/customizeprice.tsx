import ReactSwitch from "react-switch"
import styles from "../selected.module.css"

export default function Customizeprice({addcustomize})
{
    return(
        <div className={styles.customwrap}>
            <img src="https://cdn-icons-png.flaticon.com/128/5254/5254940.png" alt="" className={styles.closeofviewreview} onClick={addcustomize} />
        <h2>Here You Can Customize the Services</h2>
        <h3>The Amount will be Reduced based on your Selction</h3>
        <div className={styles.flexofcustomize}>
            <div className={styles.customizediv}>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/3322/3322854.png" alt="" />
                    <p>Washing - 500rs/Month</p>
                </div>
                <ReactSwitch onChange={()=>console.log("hello")} checked={true} className={styles.toggle}/>
            </div>
            <div className={styles.customizediv}>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/3322/3322854.png" alt="" />
                    <p>Washing - 500rs/Month</p>
                </div>
                <ReactSwitch onChange={()=>console.log("hello")} checked={true} className={styles.toggle}/>
            </div>
            <div className={styles.customizediv}>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/3322/3322854.png" alt="" />
                    <p>Washing - 500rs/Month</p>
                </div>
                <ReactSwitch onChange={()=>console.log("hello")} checked={true} className={styles.toggle}/>
            </div>
        </div>
        </div>
    )
}
import styles from "../home.module.css"

export  default function FilteroptionDiv({openfilter,handlefilter,addafilterfunction})
{
    return(
        <div className={`${styles.filteroptionwrap} ${openfilter? styles.openfilter:styles.closefilter}`}>
            <h2>Filter Options</h2>
            <p>Select the options you want to filter</p>
            <div className={styles.optiononewrap}>
                <div>
                    <input type="radio" name="hosteltype" value="Men" onChange={handlefilter} />
                    <label>Men</label>
                </div>
                 <div>
                    <input type="radio" name="hosteltype" value="Women" onChange={handlefilter}/>
                    <label>Women</label>
                </div>
            </div>
            <div className={styles.optiononewrap}>
                <div>
                    <input type="radio" name="Ac" value="yes" onChange={handlefilter}/>
                    <label>Ac</label>
                </div>
                 <div>
                    <input type="radio" name="Ac" value="no"  onChange={handlefilter}/>
                    <label>Non Ac</label>
                </div>
            </div>
            <div className={styles.optiononewrap}>
                <div>
                    <input type="radio" name="Wifi" value="yes" onChange={handlefilter} />
                    <label>Wifi</label>
                </div>
                 <div>
                    <input type="radio" name="Wifi" value="No" onChange={handlefilter} />
                    <label>Non Wifi</label>
                </div>
            </div>
            <div className={styles.optiononewrap}>
                <div>
                    <input type="radio" name="available" value="yes" onChange={handlefilter} />
                    <label>Room Availble</label>
                </div>
                 <div>
                    <input type="radio" name="available" value="no" onChange={handlefilter} />
                    <label>Non available</label>
                </div>
            </div>
            <button onClick={addafilterfunction}>Apply Filter</button>
           </div>
    )
}
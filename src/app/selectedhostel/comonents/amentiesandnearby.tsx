import styles from "../selected.module.css"

export default function AmentiesandNaerbylocation({handlereviews,addreview,amenties,nearbylocations})
{
    const serviceswithimage={
        "Wifi":"https://cdn-icons-png.flaticon.com/128/12263/12263534.png",
        "Ac":"https://cdn-icons-png.flaticon.com/128/911/911409.png",
        "Iron":"https://cdn-icons-png.flaticon.com/128/14977/14977522.png",
        "Wash":"https://cdn-icons-png.flaticon.com/128/2780/2780087.png",
        "Refrigerator":"https://cdn-icons-png.flaticon.com/128/395/395649.png",
        "Tv":"https://cdn-icons-png.flaticon.com/128/7733/7733346.png",
        "Security":"https://cdn-icons-png.flaticon.com/128/5724/5724690.png",
        "Cupboard":"https://cdn-icons-png.flaticon.com/128/4606/4606924.png",
        "Parking-2-wheeler":"https://cdn-icons-png.flaticon.com/128/3198/3198336.png",
        "Parking-4-wheeler":"https://cdn-icons-png.flaticon.com/128/2736/2736953.png",
        "Cooking":"https://cdn-icons-png.flaticon.com/128/3448/3448167.png",
        "Cycle":"https://cdn-icons-png.flaticon.com/128/308/308930.png",
    }
    const servises=JSON.parse(amenties)
    const loactons=nearbylocations.split(",")
    return(
        <div className={styles.amentiesmainwarp}>
                    <div className={styles.amentieswrap}>
                    <p className={styles.amentieswrapp}>Amenities</p>
                    <div className={styles.displayamenties}>
                        {servises.map((item,key)=>{
                            if(key!=0)
                            return(
                            <div key={key}>
                            <img src={serviceswithimage[item]} alt="" />
                            <p>{item}</p>
                        </div>
                            )
                        })}
                    </div>
                    </div>
                    <div className={styles.locationwrap}>
                     <p className={styles.amentieswrapp}>Near By Locations</p>
                     <div className={styles.wrapnear}>
                        {loactons.map((item)=>{
return(
    <div>
    <img src="https://cdn-icons-png.flaticon.com/128/3037/3037821.png" alt="" />
    <p>{item}</p>
 </div>
)
                        })}
                    
                     </div>
                     <div className={styles.reviewbuttonwrap}>
                        <div onClick={handlereviews}>
                            <p>View Reviews</p>
                        </div>
                        <div onClick={addreview}>
                            <p>Add Reviews</p>
                        </div>
                     </div>
                    </div>
                </div>
    )
}
import styles from "../home.module.css"
export default function MappopupServices({services})
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
    "Parking-4-Wheeler":"https://cdn-icons-png.flaticon.com/128/2736/2736953.png",
    "Cooking":"https://cdn-icons-png.flaticon.com/128/3448/3448167.png",
    "Cycle":"https://cdn-icons-png.flaticon.com/128/308/308930.png",
}
return(
    <div className={styles.popupwrap}>
        <img src={serviceswithimage[services]} alt="serviceicon" />
        <p>{services}</p>
    </div>
)
}
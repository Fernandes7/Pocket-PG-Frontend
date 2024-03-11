import styles from "../home.module.css"
interface myprops{
    enablesearch:()=>void
}
export default function SearchByLocation(props:myprops)
{
   
    return(
        <div className={styles.searchbylocationdiv} onClick={props.enablesearch}>
            <input type="text" placeholder="Enter The Location" />
        </div>
    )
}
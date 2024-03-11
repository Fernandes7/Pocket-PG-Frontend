"use client";
import { useEffect, useState } from "react";
import HompageImage from "./componets/homepageimage";
import HomepageInitialdata from "./componets/homepageinitialdata";
import styles from "./home.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import MapIntegration from "./componets/map";
import SearchByLocation from "./componets/searchbylocation";
export default function Hompage() {
  const router = useRouter();
  const [initialrun, setInitialrun] = useState(true);
  const [searchenable,Setsearchenable]=useState(false)
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams.get("initial") == "true") setInitialrun(true);
    else setInitialrun(false);
  });
  const searchenablefunction=()=>{
    Setsearchenable(!searchenable)
  }
  return (
    <>
      {initialrun ? (
        <div>
          <HompageImage />
          <HomepageInitialdata />
        </div>
      ) : (
        <div className={styles.homediv}>
          <div className={styles.homeleftdiv}>

          </div>
          <div className={styles.rightmapdiv}>
            <MapIntegration />
           </div>
          
        </div>
      )}
      {searchenable && <SearchByLocation enablesearch={searchenablefunction}/>}
      <div className={styles.searchfilterdiv}>
        <div onClick={()=>router.push("/home?initial=false")}>
          Search By Loaction
        </div>
        <div>Search By Name</div>
      </div>
    </>
  );
}

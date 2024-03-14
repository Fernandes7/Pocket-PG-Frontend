"use client";
import { useEffect, useState } from "react";
import HompageImage from "./componets/homepageimage";
import HomepageInitialdata from "./componets/homepageinitialdata";
import styles from "./home.module.css";
import { useSearchParams } from "next/navigation";
import MapIntegration from "./componets/map";
import SearchByLocation from "./componets/searchbylocation";
import DisplayHostels from "./componets/displayhostel";
export default function Hompage() {
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
          <DisplayHostels />
          </div>
          <div className={styles.rightmapdiv}>
            <MapIntegration />
           </div>
          
        </div>
      )}
      <div className={styles.searchfilterdiv}>
        <div onClick={searchenablefunction}>
          Search By Loaction
        </div>
        <div>Search By Name</div>
      </div>
      {searchenable && <SearchByLocation enablesearch={searchenablefunction}/>}
    </>
  );
}

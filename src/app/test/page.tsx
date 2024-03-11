"use client"
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

var enable=true;
async function getData()
{
    const serachpsrams=useSearchParams()
    if(serachpsrams.get("data")=="true")
    enable=true
    else
    enable=false

}

export default function Test()
{
    getData()
    const router=useRouter()
    return(
        <div onClick={()=>router.push("/test?data=false")}>
            <h1>Test Data</h1>
            {enable ? <p>Enable True</p>:<p>Enable false</p>}
        </div>
    )
}
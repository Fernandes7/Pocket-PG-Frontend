import { useRouter } from "next/navigation"

const RegisterRouteButton=()=>{
    const router=useRouter()
    return (
        <button onClick={()=>router.push("/register")}>Rgister/Login Now</button>
    )
}

export {RegisterRouteButton}
"use client"
import { Hourglass } from "react-loader-spinner"

export default function loader(){
    return(
        <Hourglass
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
  />
    )
}

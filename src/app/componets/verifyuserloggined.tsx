"use client"
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export default function Verifyuserloggined() {
  const [isLoggined,setIsloggined]=useState<string>("")
  useEffect(() => {
    Verifyuserloggined();
  }, []);

  const Verifyuserloggined = () => {
    const userid = localStorage.getItem("userid");
    if (userid) {
      axios
        .post("http://localhost:8000/finduserbyid", { data: userid  })
        .then((responce: AxiosResponse) => {
          if (responce.data.success)
          setIsloggined(responce.data.data.username)
        });
    }
    else
    setIsloggined("")
  };
  return isLoggined
}

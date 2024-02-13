"use client";

import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Verifyuserloggined() {
  const router = useRouter();
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
          { 
          router.push("/home");
          }
        });
    }
    else
    return false
  };
}

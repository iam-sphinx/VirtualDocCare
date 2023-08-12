"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";

const page = () => {
  const [userId, setUserId] = useState("");
  const [userData, serUserData] = useState({});
  const pathname = usePathname();
  const fetchData = async()=>{
    try{
        const response = await axios.get(
            `http://localhost:7070/api/v1/users/${userId}`
          );
        console.log(response);
    } catch(error)
    {
        console.log(error);
    }
  }
  useEffect(() => {
    setUserId(pathname.split("/")[2]);
    fetchData();
  }, []);
  return <div className="flex-1"></div>;
};

export default page;

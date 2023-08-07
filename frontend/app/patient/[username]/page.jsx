"use client";
import React from "react";

const page = ({ params }) => {
  const { username } = params;

  return <div>hello : {username}</div>;
};

export default page;

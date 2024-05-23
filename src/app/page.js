"use client";
import React, { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import Present from "@/components/Present";

function Home() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setToggle(true);
    }, 6000);
  }, []);

  return (
    <>
      <div>
        {!toggle && <Loading />}
        {toggle && <Present />}
      </div>
    </>
  );
}

export default Home;

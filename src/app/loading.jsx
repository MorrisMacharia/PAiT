"use client";
import Image from "next/image";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",  
      }}
    >
      <Image
        src="/Group.png"
        alt="pait logo"
        width={257.893}
        height={71.63}
      />
    </div>
  );
}

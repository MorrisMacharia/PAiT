import React from "react";
import "../Splash/splash.css";
import Link from "next/link";
import Image from "next/image";

export const Splash = () => {
  return (
    <div className="container">
      <div className="iphone">
        <div className="white">
          <div className="clipgrp">
            <Link href="/Home">
              <div className="group">
                <Image
                  src="/Group.png"
                  alt="group"
                  width={254.808}
                  height={71.63}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

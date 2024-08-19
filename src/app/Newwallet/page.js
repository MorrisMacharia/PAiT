"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import WalletLayout from "../Layout/WalletLayout";
import "../Newwallet/page.css";
import { WalletNav } from "../components/WalletNav/WalletNav";

const Newwallet = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  const textData = [
    {
      icon: "/badge-info.png",
      title: "These are your wallet’s secret phrases.",
      description: "They let you access the wallet.",
    },
    {
      icon: "/book-key.png",
      title: "Store these in a secure place.",
      description: "Keep your wallet safe. Never share them.",
    },
    {
      icon: "/triangle-alert.png",
      title: "Your wallet cannot be recovered if you lose the phrases.",
      description: "",
    },
  ];

  return (
    <WalletLayout hideFooter={isLoading}> {/* Pass hideFooter prop */}
      {/* <div className="creation2"> */}
        <div className="description2">
          <h1 className="wall2">Create New Wallet</h1>
          <div className="tips">
            {textData.map((item, index) => (
              <div className="tip1" key={index}>
                <img src={item.icon} alt="icon" width={24} height={24} />
                <div className="secrets">
                  {item.title}
                  <br />
                  {item.description}
                </div>
              </div>
            ))}
          </div>

          <div className="phrases">
            {isLoading ? (
              <div className="loader-circle black"></div> 
            ) : (

<WalletNav />

            )}
          </div>
        </div>
      {/* </div> */}
    </WalletLayout>
  );
};

export default Newwallet;

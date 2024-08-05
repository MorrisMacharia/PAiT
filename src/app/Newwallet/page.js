"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../Newwallet/page.css";
import Link from "next/link";

const Newwallet = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/CreateNewWallet");
    }, 5000);
  };

  return (
    <div className="creation2">
      <div className="cont1">
        <div className="panel2">
          <div className="top2">
            <Link href="/Home">
              <div className="logo11">
                <Image src="/logo.png" alt="logo" width={86} height={24} />
              </div>
            </Link>

            <div className="cirle">
              <Image src="/circle-x.png" alt="logo" width={24} height={24} />
            </div>
          </div>
          <div className="description2">
            <div className="wall2">Create New Wallet</div>
            <div className="tips">
              <div className="tip1">
                <div className="iconcircle">
                  <div>
                    <Image
                      src="/badge-info.png"
                      alt="icon"
                      width={24}
                      height={24}
                    />
                  </div>

                  <div className="secrets">
                    These are your wallet’s secret phrases. <br></br> They let
                    you access the wallet.
                  </div>
                </div>
              </div>
              <div className="tip1">
                <div className="iconcircle">
                  <div>
                    <Image
                      src="/book-key.png"
                      alt="icon"
                      width={24}
                      height={24}
                    />
                  </div>

                  <div className="secrets">
                    Store these in a secure place <br></br> to keep your wallet
                    safe. Never share them.
                  </div>
                </div>
              </div>
              <div className="tip1">
                <div className="iconcircle">
                  <div>
                    <Image
                      src="/triangle-alert.png"
                      alt="icon"
                      width={24}
                      height={24}
                    />
                  </div>

                  <div className="secrets">
                    Your wallet can not be recovered if you <br></br>loose the
                    phrases.
                  </div>
                </div>
              </div>
            </div>

            <button className="copy" onClick={handleButtonClick}>
              <div className="phrases">
                {isLoading ? (
                  <div className="loader-circle"></div>
                ) : (
                  <Image
                    src="/loader-circle.png"
                    alt="load"
                    width={24}
                    height={24}
                  />
                )}
                <div className="creating">Create Wallet</div>
              </div>
            </button>
          </div>

          <div className="actions2">
            <Link href="/VerifyPhrases">
              <button className="saved">I have saved them, continue</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newwallet;

"use client";

import React from "react";
import Image from "next/image";
import "./page.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const VerifyPhrases = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="creation4">
      <div className="cont3">
        <div className="panel4">
          <div className="top4">
            <Link href="/Home">
              <div className="logo13">
                <Image src="/logo.png" alt="logo" width={86} height={24} />
              </div>
            </Link>
            <button className="circle3" onClick={handleBackClick}>
              <Image src="/circle-x.png" alt="back" width={24} height={24} />
            </button>
          </div>
          <div className="description3">
            <div className="sec">Verify Secret Phrases</div>
            <div className="confirm">
              Confirm that you have saved the phrase by selecting the correct
              options.
            </div>
          </div>
          <div className="questions">
            <div className="q1">
              <div className="what">
                What is the <span className="styled-span">first</span> phrase?
              </div>
              <div className="options">
                <div className="op1">
                  <div className="word">dreams</div>
                </div>
                <div className="op1">
                  <div className="word">word</div>
                </div>
                <div className="op1">
                  <div className="word">echoes</div>
                </div>
              </div>
            </div>
            <div className="q1">
              <div className="what">
                What is the <span className="styled-span">second</span> phrase?
              </div>
              <div className="options">
                <div className="op1">
                  <div className="word">quantum</div>
                </div>
                <div className="op1">
                  <div className="word">velvet</div>
                </div>
                <div className="op1">
                  <div className="word">galactic</div>
                </div>
              </div>
            </div>
            <div className="q1">
              <div className="what">
                What is the <span className="styled-span">last</span> phrase?
              </div>
              <div className="options">
                <div className="op1">
                  <div className="word">shine</div>
                </div>
                <div className="op1">
                  <div className="word">rainbow</div>
                </div>
                <div className="op1">
                  <div className="word">serenade</div>
                </div>
              </div>
            </div>
          </div>
          <div className="actions">
            <button className="forgot" onClick={handleBackClick}>
              <div>
                <Image
                  src="/chevron-left.png"
                  alt="forgot"
                  width={24}
                  height={24}
                />
              </div>
              <div className="write">I forgot to write them down, go back</div>
            </button>
            <div className="actions2">
              <Link className="sav" href="/Homewallet">
                <button className="saved1">Finish</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPhrases;

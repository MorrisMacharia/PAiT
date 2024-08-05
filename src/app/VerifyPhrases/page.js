import React from "react";
import Image from "next/image";
import "./page.css";
import Link from "next/link";

const VerifyPhrases = () => {
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

            <div className="cirle3">
              <Image src="/circle-x.png" alt="logo" width={24} height={24} />
            </div>
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
                <div className="op2">
                  <div className="word2">word</div>
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
                <div className="op2">
                  <div className="word2">galactic</div>
                </div>
              </div>
            </div>

            <div className="q1">
              <div className="what">
                What is the <span className="styled-span">last</span> phrase?
              </div>
              <div className="options">
                <div className="op2">
                  <div className="word2">shine</div>
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
            <div className="forgot">
              <div>
                <Image
                  src="/chevron-left.png"
                  alt="forgot"
                  width={24}
                  height={24}
                />
              </div>
              <div className="write">I forgot to write them down, go back</div>
            </div>
            <div className="actions2">
              <button className="saved1">Finish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPhrases;

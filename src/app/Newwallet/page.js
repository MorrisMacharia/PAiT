import React from "react";
import Image from "next/image";
import "../Newwallet/page.css";

const Newwallet = () => {
  return (
    <div className="creation2">
      <div className="cont1">
        <div className="panel2">
          <div className="top2">
            <div className="logo11">
              <Image src="/logo.png" alt="logo" width={86} height={24} />
            </div>
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

            <div className="copy">
              <div className="phrases">
                <div className="load">
                  <Image
                    src="/loader-circle.png"
                    alt="load"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="creating">Creating Wallet</div>
              </div>
            </div>
          </div>
          <div className="actions2">
            <button className="saved">I have saved them, continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newwallet;

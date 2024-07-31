import React from "react";
import "../CreateNewWallet/page.css";
import Image from "next/image";

const CreateNewWallet = () => {
  return (
    <div className="creation3">
      <div className="cont2">
        <div className="panel3">
          <div className="top3">
            <div className="logo12">
              <img src="/logo.png" alt="logo" width={86} height={24} />
            </div>
            <div className="cirle2">
              <img src="/circle-x.png" alt="logo" width={24} height={24} />
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
              <table className="table">
        <tr>
            <td>word</td>
            <td>galactic</td>
            <td>velvet</td>
        </tr>
        <tr>
            <td>quantum</td>
            <td>dreams</td>
            <td>bliss</td>
        </tr>
        <tr>
            <td>whimsical</td>
            <td>rainbow</td>
            <td>serenade</td>
        </tr>
        <tr>
            <td>echoes</td>
            <td>moonlit</td>
            <td>shine</td>
        </tr>
    </table>
              </div>
              <div className="tap">
                <div className="copyicon">
                  <Image
                    src="/clipboard-copy.png"
                    alt="icon"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="tocopy">Tap to copy</div>
              </div>
            </div>
          </div>
          <div className="actions2">
            <button className="saved1">I have saved them, continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewWallet;

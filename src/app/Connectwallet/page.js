import React from "react";
import "../Connectwallet/page.css";
import Image from "next/image";

const Connectwallet = () => {
  return (
    <div className="creation1">
      <div className="cont">
        <div className="panel">
          <div className="top">
            <div className="logo11">
              <Image src="/logo.png" alt="logo" width={86} height={24} />
            </div>
            <div className="cirle">
              <Image src="/circle-x.png" alt="logo" width={24} height={24} />
            </div>
          </div>

          <div className="description">
            <div className="wall">Connect Wallet</div>
            <div className="hand">
              <Image
                src="/hand.png"
                alt="hand"
                width={240}
                height={212}
                color="white"
              />
            </div>
            <div className="web">
              Your web3 wallet acts as your user account, and is where you store
              your assets like coins.
            </div>
          </div>
          <div className="actions">
            <button className="new">
              {" "}
              <div>
                <Image src="/plus.png" alt="plus" width={24} height={24} />
              </div>{" "}
              <div className="crt">Create New Wallet</div>
            </button>
            <button className="link">
              {" "}
              <div>
                <Image src="/link.png" alt="plus" width={24} height={24} />
              </div>{" "}
              <div className="crt">Link Existing Wallet</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connectwallet;

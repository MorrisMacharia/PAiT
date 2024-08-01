import Image from "next/image";
import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import "./home.css";
import Dock from "../components/Dock/dock";

const Home = () => {
  return (
      <div className="home1">
        <div className="screen">
          <div className="main">
            <div className="frame1220">
              <Image
                src="/Clip.png"
                alt="home"
                width={121.949}
                height={33.825}
              />
            </div>
            <div className="cryptopurchase">
              <div className="pait">
                <div className="currencyname">
                  <div className="frame1222">
                    <div className="buypait">Buy PAiT</div>

                    <div className="unlock">
                      Unlock profits exclusive to PAiT holders.
                    </div>
                  </div>
                  <div className="frame1223">
                    <div className="usd">
                      <div className="usd1">
                      USD $0.50
                      </div>
                      
                       / 1 $PAIT</div>

                    <div className="btn1">
                      <button className="smallbutton">
                        Buy Now <IoChevronForward />
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <Image src="/Logo3.png" alt="" width={80} height={80} />
                </div>
              </div>

              <div className="frame1224">
                <div className="other">Other Tokens</div>
              </div>

              <div className="solana">
                <div className="Logo4">
                  <Image src="/Logo4.png" alt="logo" width={56} height={56} />
                </div>
                <div className="currencysolana">
                  <div className="sol">Solana</div>
                  <div className="usdsol">USD $140.90 / 1 $SOL</div>
                </div>
                <div className="btn2">
                  <button className="smallbutton">
                    Buy <IoChevronForward />
                  </button>
                </div>
              </div>
              <div className="toncoin">
                <div className="Logo5">
                  <Image src="/Logo5.png" alt="logo" width={56} height={56} />
                </div>
                <div className="currencytoncoin">
                  <div className="ton">Ton</div>
                  <div className="usdton">USD $ 7.59 / 1 $TON</div>
                </div>
                <div className="btn3">
                  <button className="smallbutton">
                    Buy <IoChevronForward />
                  </button>
                </div>
              </div>
            </div>
            <div className="connectwallet">
              <div className="walletarea">
                <button className="btn2">
                  <div>
                    <IoIosLink />
                  </div>
                  <div>Connect Wallet</div>
                </button>
              </div>
            </div>
          </div>
            <Dock />
        </div>
      </div>
  );
};

export default Home;

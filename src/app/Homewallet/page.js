import React from "react";
import Image from "next/image";
import { LuWallet } from "react-icons/lu";
import { IoChevronForward } from "react-icons/io5";
import "../Homewallet/page.css";
import Dock from "../components/Dock/dock";

const Homewallet = () => {
  return (
      <div className="home2">
        <div className="screen2">
          <div className="main2">
            <div className="account">
              <div className="frame1219">
                <div className="balance">My Balance</div>
                <div className="wallet">
                  <LuWallet />
                </div>
              </div>
              <div className="bal">USDT $30,704</div>
              <div className="breakdown">
                <div className="frame1216">
                  <div className="dig1">54,000.0 PAIT</div>
                  <div className="dig2">USDT $27,000</div>
                </div>
                <div className="frame1216">
                  <div className="dig1">24.64 SOL</div>
                  <div className="dig2">USDT $3,449</div>
                </div>
                <div className="frame1216">
                  <div className="dig1">34.04 TON</div>
                  <div className="dig2">USDT $225</div>
                </div>
              </div>
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
                    <div className="usd">USD $0.50 / 1 $PAIT</div>

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
                  <div className="ton">Solana</div>
                  <div className="usdton">USD $ 7.59 / 1 $TON</div>
                </div>
                <div className="btn3">
                  <button className="smallbutton">
                    Buy <IoChevronForward />
                  </button>
                </div>
              </div>
            </div>
        <Dock />
          </div>
        </div>
      </div>
  );
};

export default Homewallet;

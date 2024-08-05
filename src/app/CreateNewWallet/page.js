"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import "../CreateNewWallet/page.css";
import Image from "next/image";

const wordList = [
  "alpha",
  "beta",
  "gamma",
  "delta",
  "epsilon",
  "zeta",
  "eta",
  "theta",
  "iota",
  "kappa",
  "lambda",
  "mu",
  "nu",
  "xi",
  "omicron",
  "pi",
  "rho",
  "sigma",
  "tau",
  "upsilon",
  "phi",
  "chi",
  "psi",
  "omega",
];

const generateSecretPhrase = () => {
  const phrase = [];
  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    phrase.push(wordList[randomIndex]);
  }
  return phrase;
};

const CreateNewWallet = () => {
  const [secretPhrase, setSecretPhrase] = useState([]);

  useEffect(() => {
    setSecretPhrase(generateSecretPhrase());
  }, []);

  const handleCopy = () => {
    const phraseString = secretPhrase.join(" ");
    navigator.clipboard
      .writeText(phraseString)
      .then(() => {
        alert("Secret phrases copied to clipboard!");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <div className="creation3">
      <div className="cont2">
        <div className="panel3">
          <div className="top3">

            <Link href="/Home">
            
            <div className="logo12">
              <Image src="/logo.png" alt="logo" width={86} height={24} />
            </div>
            </Link>
            <div className="cirle2">
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
                    These are your wallet’s secret phrases. <br /> They let you
                    access the wallet.
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
                    Store these in a secure place <br /> to keep your wallet
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
                    Your wallet cannot be recovered if you <br />
                    lose the phrases.
                  </div>
                </div>
              </div>
            </div>

            <div className="copy">
              <div className="phrases">
                <table className="table">
                  <tbody>
                    {Array.from({ length: 4 }, (_, rowIndex) => (
                      <tr key={rowIndex}>
                        {Array.from({ length: 3 }, (_, colIndex) => (
                          <td key={colIndex}>
                            {secretPhrase[rowIndex * 3 + colIndex]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="tap" onClick={handleCopy}>
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
          <Link className="action3" href="/Verify"> 
              <button className="saved1">I have saved them, continue</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewWallet;

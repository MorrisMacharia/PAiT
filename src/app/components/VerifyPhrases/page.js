"use client"

import React, { useState, useEffect } from "react";
import "./page.css"
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const VerifyPhrases = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [phrases, setPhrases] = useState([]);

  useEffect(() => {
    const phrasesFromParams = [];
    for (let i = 0; i < 9; i++) {
      const phrase = searchParams.get(`phrase${i}`);
      if (phrase) phrasesFromParams.push(phrase);
    }
    setPhrases(phrasesFromParams);
  }, [searchParams]);

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="creation5">
      <div className="cont4">
        <div className="panel5">
          <div className="top5">
            <Link href="/Home">
              <div className="logo14">
                <Image src="/logo.png" alt="logo" width={86} height={24} />
              </div>
            </Link>
            <button className="circle4" onClick={handleBackClick}>
              <Image src="/circle-x.png" alt="back" width={24} height={24} />
            </button>
          </div>
          <div className="description4">
            <div className="sec">Final Verification of Secret Phrases</div>
            <div className="confirm">
              Ensure the phrases you entered are correct.
            </div>
          </div>
          <div className="questions">
            <table className="table">
              <tbody>
                {Array.from({ length: 3 }, (_, rowIndex) => (
                  <>
                    <tr key={`label-${rowIndex}`}>
                      <td colSpan={3}>
                        <div className="what">
                          What is the <span className="styled-span">{rowIndex === 0 ? 'first' : rowIndex === 1 ? 'second' : 'third'}</span> phrase?
                        </div>
                      </td>
                    </tr>
                    <tr key={rowIndex}>
                      {Array.from({ length: 3 }, (_, colIndex) => {
                        const index = rowIndex * 3 + colIndex;
                        return (
                          <td key={colIndex}>
                            <input
                              type="text"
                              className="op2"
                              value={phrases[index]}
                              readOnly
                              style={{
                                backgroundColor: 
                                  (rowIndex === 0 && colIndex === 1) || 
                                  (rowIndex === 1 && colIndex === 2) || 
                                  (rowIndex === 2 && colIndex === 0) ? 'white' : 'inherit',
                                color: '#8A94B0'
                              }}
                            />
                          </td>
                        );
                      })}
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <div className="actions">
            <div className="forgot" onClick={handleBackClick}>
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
              <Link className="sav" href="/Homewallet">
                <button className="saved2">Finish</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPhrases;

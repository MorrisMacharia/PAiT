"use client";

import React from "react";
import WalletLayout from "@/app/Layout/WalletLayout";
import "./page.css";

const phrases = [
  { question: "first", options: ["derams", "word", "echoes"] },
  { question: "second", options: ["quantum", "velvet", "galactic"] },
  { question: "third", options: ["shine", "rainbow", "serenade"] },
];

const Verify = () => {
  return (
    <WalletLayout>
      <div className="holder">
        <div className="description">
          <h1 className="h1">Verify Secret Phrases</h1>
          <p className="p1">
            Confirm that you have saved the phrase by selecting the correct
            options.
          </p>
        </div>
        <div className="container">
          {phrases.map((phrase, index) => (
            <div key={index} className="phrase">
              <p className="what">
                What is the <span className="sp">{phrase.question}</span> phrase?
              </p>
              <div className="btns">
                {phrase.options.map((option, idx) => (
                  <button key={idx} className="btn">
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </WalletLayout>
  );
};

export default Verify;

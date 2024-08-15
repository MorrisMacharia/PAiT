"use client";

import React, { useState, useEffect } from "react";
import WalletLayout from "@/app/Layout/WalletLayout";
import "./page.css";

const phrases = [
  { question: "first", options: ["derams", "word", "echoes"] },
  { question: "second", options: ["quantum", "velvet", "galactic"] },
  { question: "third", options: ["shine", "rainbow", "serenade"] },
];

const Verify = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [allSelected, setAllSelected] = useState(false);
  const handleClick = (phraseIndex, optionIndex) => {
    setSelectedOptions(prev => ({
      ...prev,
      [phraseIndex]: optionIndex
    }));
  };
  useEffect(() => {
    const allPhrasesFilled = Object.keys(selectedOptions).length === phrases.length;
    setAllSelected(allPhrasesFilled);
  }, [selectedOptions]);
  return (
    <WalletLayout allPhrasesFilled={allSelected}>
      <div className="holder">
        <div className="description">
          <h3 className="h1">Verify Secret Phrases</h3>
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
                  <button
                    key={idx}
                    className="btn"
                    style={{
                      backgroundColor: selectedOptions[index] === idx ? 'white' : '',
                    }}
                    onClick={() => handleClick(index, idx)}
                  >
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
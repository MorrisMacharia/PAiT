"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import WalletLayout from "@/app/Layout/WalletLayout";
import "./page.css";

const Verify = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [allSelected, setAllSelected] = useState(false);
  const [phrases, setPhrases] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const routerPhrases = searchParams.get('phrases');
    if (routerPhrases) {
      const parsedPhrases = JSON.parse(routerPhrases);
      setPhrases(parsedPhrases.map((phrase, index) => ({
        question: `${index + 1}${getOrdinalSuffix(index + 1)}`,
        options: shuffleArray([phrase, ...generateRandomOptions(phrase)])
      })));
    }
  }, [searchParams]);

  const handleClick = (phraseIndex, optionIndex) => {
    setSelectedOptions(prev => ({
      ...prev,
      [phraseIndex]: optionIndex
    }));
  };

  useEffect(() => {
    const allPhrasesFilled = Object.keys(selectedOptions).length === phrases.length;
    setAllSelected(allPhrasesFilled);
  }, [selectedOptions, phrases]);

  const getOrdinalSuffix = (num) => {
    const j = num % 10;
    const k = num % 100;
    if (j === 1 && k !== 11) return "st";
    if (j === 2 && k !== 12) return "nd";
    if (j === 3 && k !== 13) return "rd";
    return "th";
  };

  const generateRandomOptions = (correctPhrase) => {
    // This is a placeholder function. In a real application, you'd use a more sophisticated method to generate plausible alternatives.
    return ["Option A", "Option B"].filter(option => option !== correctPhrase);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

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
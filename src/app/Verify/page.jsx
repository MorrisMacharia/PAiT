"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import WalletLayout from "@/app/Layout/WalletLayout";
import "./page.css";
import { validateMnemonicPhrase } from "../utils/utils.jsx";

const Verify = () => {
  const [enteredPhrases, setEnteredPhrases] = useState(Array(9).fill("")); // Only 9 phrases for the 3x3 grid
  const [phrases, setPhrases] = useState([]);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  // Retrieve only the first 3 phrases from the Newwallet page
  useEffect(() => {
    const routerPhrases = searchParams.get("phrases");
    if (routerPhrases) {
      const parsedPhrases = JSON.parse(routerPhrases);
      setPhrases(parsedPhrases.slice(0, 9)); // We are only interested in the first 9 phrases
    }
  }, [searchParams]);

  // Check if the entered phrases match the original ones
  useEffect(() => {
    const allPhrasesEntered = enteredPhrases.every((phrase) => phrase.trim() !== "");

    if (allPhrasesEntered) {
      const isValid = enteredPhrases.every((phrase, index) =>
        phrase.trim() === phrases[index]
      );

      if (isValid) {
        const mnemonicPhrase = enteredPhrases.join(" ").trim();
        if (validateMnemonicPhrase(mnemonicPhrase)) {
          setIsVerified(true);
          setError("");
          router.push("/Dashboard"); // Redirect to dashboard on successful verification
        } else {
          setError("The entered phrases are not valid. Please try again.");
        }
      } else {
        setError("The entered phrases do not match the generated phrases.");
      }
    }
  }, [enteredPhrases, phrases, router]);

  // Handle changes in input fields
  const handleInputChange = (index, value) => {
    const updatedPhrases = [...enteredPhrases];
    updatedPhrases[index] = value;
    setEnteredPhrases(updatedPhrases);
  };

  return (
    <WalletLayout allPhrasesFilled={isVerified}>
      <div className="holder">
        <div className="description">
          <h3 className="h1">Verify Secret Phrases</h3>
          <p className="p1">Enter the correct phrases in the first 3 rows.</p>
          {error && <div className="error">{error}</div>}
        </div>
        <div className="grid-container">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="phrase-item">
              <input
                type="text"
                className="input-phrase"
                value={enteredPhrases[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
    </WalletLayout>
  );
};

export default Verify;

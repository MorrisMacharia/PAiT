// Verify.js
"use client";

import React, { useState, useEffect, Suspense } from "react";
import "./page.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import WalletLayout from "@/app/Layout/WalletLayout";

const Verify = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [inputPhrases, setInputPhrases] = useState(Array(9).fill(""));
  const [secretPhrases, setSecretPhrases] = useState([]);
  const [errors, setErrors] = useState(Array(9).fill(false));

  useEffect(() => {
    const phrases = [];
    for (let i = 0; i < 9; i++) {
      const phrase = searchParams.get(`phrase${i}`);
      if (phrase) phrases.push(phrase);
    }
    setSecretPhrases(phrases);
  }, [searchParams]);

  const handleBackClick = () => {
    router.back();
  };

  const handleChange = (index, value) => {
    const newInputPhrases = [...inputPhrases];
    newInputPhrases[index] = value;
    setInputPhrases(newInputPhrases);
  };

  const handleSubmit = () => {
    const newErrors = inputPhrases.map(
      (phrase, index) => phrase !== secretPhrases[index]
    );
    setErrors(newErrors);
    if (!newErrors.includes(true)) {
      const query = inputPhrases
        .map((phrase, index) => `phrase${index}=${phrase}`)
        .join("&");
      router.push(`/VerifyPhrases?${query}`);
    } else {
      alert("Please enter the correct phrases.");
    }
  };

  return (
    <WalletLayout>
      <div className="creation4">
        <div className="description3">
          <div className="sec">Verify Secret Phrases</div>
          <div className="confirm">
            Confirm that you have saved the phrase by entering them in the
            correct order.
          </div>
        </div>
        <table className="table">
            {Array.from({ length: 3 }, (_, rowIndex) => (
              <>
                <tr key={`label-${rowIndex}`}>
                  <td colSpan={3}>
                    <div className="what">
                      What is the{" "}
                      <span className="styled-span">
                        {rowIndex === 0
                          ? "first"
                          : rowIndex === 1
                          ? "second"
                          : "third"}
                      </span>{" "}
                      phrase?
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
                          className={`op1 ${errors[index] ? "error" : ""}`}
                          value={inputPhrases[index]}
                          onChange={(e) => handleChange(index, e.target.value)}
                          style={{ color: "#8A94B0" }}
                        />
                      </td>
                    );
                  })}
                </tr>
              </>
            ))}
        </table>
      </div>
    </WalletLayout>
  );
};

export default Verify;

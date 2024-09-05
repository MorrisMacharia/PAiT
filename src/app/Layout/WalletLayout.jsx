"use client"

import React, { useState, useEffect } from "react";
import { WalletNav } from "../components/WalletNav/WalletNav";
import { WalletFooter } from "../components/WalletFooter/WalletFooter";

export default function WalletLayout({ children, allPhrasesFilled, onFinish }) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100vh",
    minHeight: "100vh",
    padding: windowWidth > 1200 ? "1rem" : windowWidth > 768 ? "0.8rem" : "0.3rem",
  };

  const navStyle = {
    width: "100%",
    padding: windowWidth > 1200 ? "1rem" : windowWidth > 768 ? "0.8rem" : "0.3rem",
  };

  const mainContentStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: windowWidth > 1200 ? "1rem" : windowWidth > 768 ? "0.8rem" : "0.3rem",
  };

  const footerStyle = {
    padding: windowWidth > 1200 ? "1rem" : windowWidth > 768 ? "0.8rem" : "0.3rem",
  };

  return (
    <div style={layoutStyle}>
      <nav style={navStyle}>
        <WalletNav />
      </nav>

      <main style={mainContentStyle}>
        {children}
      </main>

      <footer style={footerStyle}>
        <WalletFooter allPhrasesFilled={allPhrasesFilled} onFinish={onFinish} />
      </footer>
    </div>
  );
}

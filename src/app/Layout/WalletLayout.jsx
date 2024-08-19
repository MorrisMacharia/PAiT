import React from "react";
import { WalletNav } from "../components/WalletNav/WalletNav";
import { WalletFooter } from "../components/WalletFooter/WalletFooter";

export default function WalletLayout({
  children,
  hideFooter,
  allPhrasesFilled,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-around",
      }}
    >
      <nav>
        <WalletNav />
      </nav>

      {children}
      {!hideFooter && (
        <footer>
          <WalletFooter allPhrasesFilled={allPhrasesFilled} />
        </footer>
      )}
    </div>
  );
}

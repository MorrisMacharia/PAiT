import React from "react";
import { WalletNav } from "../components/WalletNav/WalletNav";
import { WalletFooter } from "../components/WalletFooter/WalletFooter";

export default function WalletLayout({ children, allPhrasesFilled, onFinish }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-around" }}>
      <nav>
        <WalletNav />
      </nav>

      {children}

     
        <footer>
          <WalletFooter allPhrasesFilled={allPhrasesFilled} onFinish={onFinish} />
        </footer>
      
    </div>
  );
}

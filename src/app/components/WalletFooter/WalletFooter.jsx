import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import "../WalletFooter/WalletFooter.css";

export const WalletFooter = ({ allPhrasesFilled, onFinish }) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="actions">
      <div className="forgot" onClick={handleBackClick}>
        <div>
          <Image src="/chevron-left.png" alt="forgot" width={24} height={24} />
        </div>
        <div className="write">I forgot to write them down, go back</div>
      </div>
      <div className="actions2">
        <button 
          className="saved2"
          style={{ backgroundColor: allPhrasesFilled ? 'aqua' : 'gray' }} // Change color based on state
          onClick={onFinish} // Call onFinish when button is clicked
          disabled={!allPhrasesFilled} // Disable button if phrases aren't filled
        >
          Finish
        </button>
      </div>
    </div>
  );
};

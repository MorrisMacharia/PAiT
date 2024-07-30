import React from "react";
import "../Dock/dock.css";
import Image from "next/image";

const Dock = () => {
  return (
    <div className="dock">
      <div className="btn11">
        <button className="dock1">
          <Image
            src="/white-logomark 1.png"
            alt="home"
            width={24}
            height={16.865}
          />
          <div className="hm">Home</div>
        </button>
      </div>

      <div className="btn11">
        <button className="dock2">
          <Image
            src="/copy.png"
            alt="home"
            width={24}
            height={16.865}
          />
          <div className="hm">Copy</div>
        </button>
      </div>
      <div className="btn11">
        <button className="dock2">
          <Image
            src="/trade.png"
            alt="home"
            width={24}
            height={16.865}
          />
          <div className="hm">Trade</div>
        </button>
      </div>
      <div className="btn11">
        <button className="dock2">
          <Image
            src="/coins.png"
            alt="home"
            width={24}
            height={16.865}
          />
          <div className="hm">Meme</div>
        </button>
      </div>





    </div>
  );
};

export default Dock;

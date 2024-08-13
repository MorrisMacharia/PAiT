import React from "react";
import Image from "next/image";
import "../../Home/home.css";

export function TokenCard({ name, price, logo, description }) {
  return (
    <div className="token-card">
      <div className="token-logo">
        <Image src={logo} alt={name} width={56} height={56} />
      </div>
      <div className="token-info">
        <div className="token-name">{name}</div>
        <span>
          <div className="token-price">{price}</div>
          <div className="token-description">{description}</div>
        </span>
      </div>

      <button className="small-button">Buy</button>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import BottomNavbar from "../components/Dock/dock";

export default function HomeLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: isMobile ? "10px" : "20px",
        position: "relative",
      }}
    >
      <div style={{ flex: 1 }}>
        {children}
      </div>

      <footer>
        <BottomNavbar isMobile={isMobile} />
      </footer>
    </div>
  );
}

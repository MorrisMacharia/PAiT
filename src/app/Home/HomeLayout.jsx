import React from "react";
import BottomNavbar from "../components/Dock/dock";

export default function HomeLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "100%",
      }}
    >
      <main>{children}</main>
      <footer>
        <BottomNavbar />
      </footer>
    </div>
  );
}

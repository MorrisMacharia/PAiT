import { poppins } from "@/app/utils/font";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

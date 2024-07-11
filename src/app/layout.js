import { Permanent_Marker } from "next/font/google";
import "./globals.css";

const font = Permanent_Marker({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Brooklyn Stoop Sale",
  description: "Join us on the 10th of August for a fun and friendly stoop sale!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import Header from "@/components/Header"; // Import the Header component
import Footer from "@/components/Footer"; // Import the Footer component
import { Inter, Poppins, Montserrat } from "next/font/google"; // Import Montserrat correctly
import "./globals.css";

// Configure fonts with desired weights and subsets
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

// Metadata for the application
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
       
       

        {/* Main content */}
        <main>{children}</main>

       
      </body>
    </html>
  );
}

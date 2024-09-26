import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from './components/Header';

const opensans = Open_Sans({
  weight: ['400', '700'], // Specify font weights you need
  subsets: ['latin'],     // Subsets you need
  display: 'swap',        // Use 'swap' to prevent FOIT (Flash of Invisible Text)
});

export const metadata: Metadata = {
  title: "Botanic Gardens",
  description: "A blog dedicated to botanic gardens",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
    <body className={opensans.className}> 
      <Header/>
      {children}
    </body>
  </html>
  );
}

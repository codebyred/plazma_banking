import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable:'--font-inter' });
const ibmPlexSherif = IBM_Plex_Serif({
  subsets:["latin"], 
  weight:['400', '700'], 
  variable:"--font-ibm-plex-sherif"
})

export const metadata: Metadata = {
  title: "Plazma",
  description: "A modern banking platform",
  icons:{
    icon:"/icons/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSherif.variable}`}>
        {children}
      </body>
    </html>
  );
}

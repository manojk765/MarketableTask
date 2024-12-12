import type { Metadata } from "next";

import "./globals.css";

//import NavBar from '../components/NavBar';
import StarsCanvas from "@/components/StarBackground";

//import { Providers } from './providers'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="en"  
    className="scrollbar-thin scrollbar-track-zinc-800"
    >
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >    
          {/* <Providers> */}
          
        <StarsCanvas/>
       

        {/* <header className="h-16">
          <NavBar />
        </header> */}
        <main>
          {children}
        </main>

        {/* </Providers> */}
       
      </body>
    </html>
  );
}

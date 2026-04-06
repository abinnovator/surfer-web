import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Surfer",
  description: "hey there! I'm making an vscode extension that will allow users to talk to groq ai through the chat pane and assign the ai model tasks to do by entering it in the task pannel",
};

const SpaceMono = Space_Mono({
  variable: '--font-space',
  weight: ["400", "700"],
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${SpaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-[#15120B]">
        
        {children}
      </body>
    </html>
  );
}

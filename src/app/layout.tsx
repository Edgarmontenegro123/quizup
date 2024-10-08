import React from "react";
import type { Metadata } from "next";
import Image from "next/image"
import Logo from "../app/public/images/quiz-up-logo.png"
import "./globals.css";

export const metadata: Metadata = {
  title: "QuizUp!",
  description: "App made with love by Edgar Montenegro!",
  icons: "/brain.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#056CF2] p-4">
        <main className="mt-2 max-w-[900px] w-full m-auto flex flex-col items-center">
            <Image src={Logo} alt="logo"
                   className="h-[200px] sm:h-full"
                   width={200}
                   height={200}
                   priority
            />
            {children}
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Red_Hat_Display } from 'next/font/google'
import { redHatBold, redHatMedium, redHatRegular } from './fonts/fonts'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-redhat',
})

export const metadata: Metadata = {
  title: "Kastrix",
  description: "Kastrix",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`
      ${geistSans.variable} 
      ${geistMono.variable} 
      ${redHatBold.variable} 
      ${redHatMedium.variable} 
      ${redHatRegular.variable}
    `}>
      <body>
        {children}
      </body>
    </html>
  )
}

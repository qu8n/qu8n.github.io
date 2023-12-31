import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quan Nguyen',
  description:
    "I currently work as a software engineer at MSKCC, where I help streamline cancer research processes. I'm also a part-time grad student at Penn Engineering, focusing on software systems and machine learning.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

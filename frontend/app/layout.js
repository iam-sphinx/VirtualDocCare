import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VirtualDocCare',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-popins bg-[#f9f9f9]">
      <Navbar />
      {children}</body>
    </html>
  )
}

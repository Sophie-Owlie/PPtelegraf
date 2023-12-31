import './globals.css'
import type { Metadata } from 'next'
import { PPTelegraf } from '@/styles/fonts'

export const metadata: Metadata = {
  title: 'PPTelegraf example',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={PPTelegraf.className}>{children}</body>
    </html>
  )
}

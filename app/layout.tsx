import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Censorship Bypass Toolkit — Developer Tools for Open Internet Access',
  description: 'Reliable proxy configs, DNS alternatives, and VPN guides for developers in restricted countries. $19/mo subscription.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="005e65df-20ea-4015-8547-3f1fe8ca47a3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}

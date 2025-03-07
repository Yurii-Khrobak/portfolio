'use client'

import './globals.css';
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Yurii Khrobak | Full-Stack</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className='container'>
          <SessionProvider refetchInterval={5 * 60}>
            {children}
          </SessionProvider>
        </div>
      </body>
    </html>
  )
}

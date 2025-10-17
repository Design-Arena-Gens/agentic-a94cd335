import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Learning Path Creator',
  description: 'Create and manage learning paths',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

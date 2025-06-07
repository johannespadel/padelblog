import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Padel Blog - Johannes Padel',
  description: 'A personal blog by Johannes Padel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <header className="border-b">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold">
              <a href="/" className="hover:text-blue-600">
                Padel Blog
              </a>
            </h1>
            <p className="text-gray-600 mt-1">Personal thoughts by Johannes Padel</p>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t mt-16">
          <div className="container mx-auto px-4 py-6 text-center text-gray-600">
            <p>&copy; 2024 Johannes Padel. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
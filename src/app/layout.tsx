import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Clarity Couch Chess Club',
    description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="min-h-screen p-8 md:p-24 bg-zinc-900 text-slate-100">
                    <h1 className="text-2xl md:text-3xl">Hello 👋</h1>
                    {children}
                </main>
            </body>
        </html>
    )
}

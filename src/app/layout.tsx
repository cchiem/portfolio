import type { Metadata } from 'next'
import './globals.css'
import { Gabarito } from 'next/font/google'

export const metadata: Metadata = {
    title: 'Chris Chiem - Portfolio',
    description: 'Portfolio',
}

const gabarito = Gabarito({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${gabarito.className} cursor-[url('/assets/cursor/arrowhead.svg'), auto] bg-[url('/assets/background/subtle-dots.png')] bg-[size:60px] bg-top bg-repeat antialiased`}
            >
                {children}
            </body>
        </html>
    )
}

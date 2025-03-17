import type { Metadata } from 'next'
import './globals.css'
import { Gabarito } from 'next/font/google'

export const metadata: Metadata = {
    title: 'Chris Chiem - Portfolio',
    description: 'Portfolio',
}

const inter = Gabarito({
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
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    )
}

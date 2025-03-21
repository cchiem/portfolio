'use client' // Ensure this runs only on the client

import Image from 'next/image'
import React, { useEffect, useState, RefObject } from 'react'

interface CursorProps {
    buttonRef: RefObject<HTMLDivElement>
    position: 'top-right' | 'bottom-left'
    imageUrl: string
}

const Cursor = ({ buttonRef, position, imageUrl }: CursorProps) => {
    const [cursorPosition, setCursorPosition] = useState({ x: -120, y: -10 })
    const [opacity, setOpacity] = useState(1) // Control fade-out
    const [scale, setScale] = useState(1) // State for scaling effect
    const [isClient, setIsClient] = useState(false) // Ensure hydration matches

    const initialTransform =
        position === 'top-right'
            ? 'translateY(-150px) translateX(75px)'
            : 'translateY(25px) translateX(-105px)'

    const delay = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms))

    useEffect(() => {
        setIsClient(true) // Prevents hydration mismatch by ensuring it runs only on the client
    }, [])

    useEffect(() => {
        if (!isClient || !buttonRef.current) return // Ensure it's running on the client

        let isMounted = true // Prevent state updates on unmounted component

        async function animateCursor() {
            if (!buttonRef.current || !isMounted) return

            const button = buttonRef.current
            button.style.transform = initialTransform
            button.style.transition = 'none'

            await delay(100)
            if (!isMounted || !buttonRef.current) return

            const buttonRect = button.getBoundingClientRect()
            const x = buttonRect.x + buttonRect.width / 2
            const y = buttonRect.y + buttonRect.height / 2
            setCursorPosition({ x, y })

            await delay(1000)
            if (!isMounted) return

            setScale(0.9)
            await delay(500)

            button.style.outline = '2px solid #2B9BEB'
            button.style.transition = 'transform 700ms ease-in-out'
            button.style.transform = 'translateY(0)'

            setCursorPosition({
                x: position === 'top-right' ? x - 75 : x + 105,
                y: position === 'bottom-left' ? y - 25 : y + 150,
            })

            await delay(1000)
            if (!isMounted) return
            setScale(1)

            button.style.outline = 'transparent'
            setOpacity(0) // Trigger fade-out effect
        }

        animateCursor()

        return () => {
            isMounted = false // Cleanup to prevent memory leaks
        }
    }, [isClient, buttonRef, position])

    // Prevent rendering on the server until hydration is complete
    if (!isClient) return null

    return (
        <Image
            style={{
                position: 'absolute',
                top: `${cursorPosition.y}px`,
                left: `${cursorPosition.x}px`,
                transition:
                    'top 700ms ease-in-out, left 700ms ease-in-out, opacity 700ms ease-in-out, transform 200ms ease-in-out',
                opacity,
                transform: `scale(${scale})`,
            }}
            src={imageUrl}
            alt="cursor"
            width={100}
            height={100}
            className="pointer-events-none absolute z-50 size-30"
        />
    )
}

export default Cursor

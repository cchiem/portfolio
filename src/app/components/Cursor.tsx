'use client'
import Image from 'next/image'
import React, { useEffect, useState, RefObject } from 'react'

interface CursorProps {
    buttonRef: RefObject<HTMLDivElement>
}

const Cursor: React.FC<CursorProps> = ({ buttonRef }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -10 })

    useEffect(() => {
        async function animateCursor() {
            if (!buttonRef.current) return

            await new Promise((resolve) => setTimeout(resolve, 1000))

            const buttonRect = buttonRef.current.getBoundingClientRect()
            const x = buttonRect.x + buttonRect.width / 2
            const y = buttonRect.y + buttonRect.height / 2
            setCursorPosition({ x, y })

            await new Promise((resolve) => setTimeout(resolve, 1000))

            const newY = y + 150
            setCursorPosition({ x, y: newY })

            // Synchronize both cursor and button movement
            buttonRef.current.style.transition = 'transform 700ms ease-in-out'
            buttonRef.current.style.transform = `translateY(150px)`

            await new Promise((resolve) => setTimeout(resolve, 1000))

            setCursorPosition({ x: window.innerHeight - 100, y: -100 })
        }

        animateCursor()
    }, [buttonRef])

    return (
        <Image
            style={{
                position: 'absolute',
                top: `${cursorPosition.y}px`,
                left: `${cursorPosition.x}px`,
                transition: 'top 700ms ease-in-out, left 700ms ease-in-out',
            }}
            src="/assets/cursor/designer-cursor.svg"
            alt="cursor"
            width={100}
            height={100}
            className="pointer-events-none absolute z-50 size-30"
        />
    )
}

export default Cursor

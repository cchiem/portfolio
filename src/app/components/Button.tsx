import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ButtonProps {
    iconSource: string
    color: string
    link: string
    text: string
}

const Button = ({ color, link, text, iconSource }: ButtonProps) => {
    return (
        <Link
            className={`${color} flex items-center gap-1 rounded-xl px-3 py-1`}
            href={link}
            target="_blank"
        >
            <Image
                src={iconSource}
                alt={text}
                width={100}
                height={100}
                className="w-6"
            />
            <p className="text-white">{text}</p>
        </Link>
    )
}

export default Button

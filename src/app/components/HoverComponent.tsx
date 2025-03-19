import Image from 'next/image'
import React from 'react'

interface HoverComponentProps {
    name: string
    source: string
}
const HoverComponent = ({ name, source }: HoverComponentProps) => {
    return (
        <span className="group shine-text-shiny relative mx-1 inline-block font-bold">
            {name}
            <Image
                src={source}
                alt={name}
                width={100}
                height={100}
                className="absolute bottom-0 left-1/2 h-auto w-10 -translate-x-1/2 rotate-6 transform rounded-sm opacity-0 transition-all duration-200 ease-in-out group-hover:-translate-y-6 group-hover:scale-90 group-hover:opacity-100"
            />
        </span>
    )
}

export default HoverComponent
